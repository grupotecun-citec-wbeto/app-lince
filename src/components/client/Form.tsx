import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Heading,
  } from '@chakra-ui/react'
  
  const Form = () => {
    return (
      <Box>
        <Heading fontSize="lg" mb={3}>
          Información del cliente
        </Heading>
  
        <FormControl mb={3}>
          <FormLabel fontSize="sm">Teléfono de cliente</FormLabel>
          <Input
            type="tel"
            placeholder="Ingresar teléfono"
            size="sm"
            borderRadius="md"
          />
        </FormControl>
  
        <FormControl mb={3}>
          <FormLabel fontSize="sm">Correo electrónico</FormLabel>
          <Input
            type="email"
            placeholder="Ingresar correo electrónico"
            size="sm"
            borderRadius="md"
          />
        </FormControl>
  
        <FormControl>
          <FormLabel fontSize="sm">Comentarios</FormLabel>
          <Textarea
            placeholder="Type here"
            size="sm"
            borderRadius="md"
            rows={4}
          />
        </FormControl>
      </Box>
    )
  }
  
  export default Form
  