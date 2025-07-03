import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Stack,
    Textarea,
    Text,
    VStack,
    Input,
    useToast,
  } from '@chakra-ui/react'
  import { useState } from 'react'
  
  const FormularioClasificacion = () => {
    const [comentario, setComentario] = useState('')
    const [archivoCargado, setArchivoCargado] = useState(false)
    const toast = useToast()
  
    const handleArchivoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        setArchivoCargado(true)
        toast({
          title: 'Archivo cargado',
          description: `${file.name}`,
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }
    }
  
    return (
      <Box p={4}>
        {/* Clasificación */}
        <Text fontWeight="bold" mb={2}>
          Clasificación
        </Text>
        <CheckboxGroup colorScheme="blue" defaultValue={[]}>
          <Stack direction="row" spacing={4} mb={4}>
            <Checkbox value="si">SI</Checkbox>
            <Checkbox value="no">NO</Checkbox>
            <Checkbox value="na">NO APLICA</Checkbox>
          </Stack>
        </CheckboxGroup>
  
        {/* Comentarios */}
        <Text fontWeight="bold" mb={2}>
          Comentarios
        </Text>
        <Textarea
          placeholder="Type here"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          mb={4}
        />
  
        {/* Botones multimedia */}
        <VStack align="stretch" spacing={3} mb={4}>
          <Button variant="outline" colorScheme="gray">
            TOMAR FOTO
          </Button>
          <Button variant="outline" colorScheme="gray">
            TOMAR VIDEO
          </Button>
          <Button as="label" variant="outline" colorScheme="gray" cursor="pointer">
            CARGAR ARCHIVO
            <Input
              type="file"
              hidden
              onChange={handleArchivoChange}
            />
          </Button>
          {archivoCargado && <Text fontSize="sm">Cargado</Text>}
        </VStack>
  
      </Box>
    )
  }
  
  export default FormularioClasificacion
  