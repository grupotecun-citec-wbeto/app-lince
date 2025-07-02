import {
    Box,
    Heading,
    Table,
    Tbody,
    Tr,
    Td,
    useBreakpointValue,
    VStack,
  } from '@chakra-ui/react'
  
  type InfoEquipo = {
    serie: string
    marca: string
    categoria: string
    modelo: string
  }
  
  const equipo: InfoEquipo = {
    serie: '123456789',
    marca: 'DEVELON',
    categoria: 'Excavadora',
    modelo: 'DX220',
  }
  
  const EquipoInfoTable = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })
  
    return (
      <Box mb={6}>
        <Heading fontSize="lg" mb={3}>
          Información del equipo
        </Heading>
  
        {isMobile ? (
          <VStack
            align="stretch"
            spacing={2}
            bg="gray.50"
            p={4}
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
          >
            <Box>
              <b>Número de serie:</b> {equipo.serie}
            </Box>
            <Box>
              <b>Marca:</b> {equipo.marca}
            </Box>
            <Box>
              <b>Categoría:</b> {equipo.categoria}
            </Box>
            <Box>
              <b>Modelo:</b> {equipo.modelo}
            </Box>
          </VStack>
        ) : (
          <Box overflowX="auto">
            <Table variant="simple" size="sm" bg="white">
              <Tbody>
                <Tr>
                  <Td fontWeight="bold">Número de serie</Td>
                  <Td>{equipo.serie}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold">Marca</Td>
                  <Td>{equipo.marca}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold">Categoría</Td>
                  <Td>{equipo.categoria}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold">Modelo</Td>
                  <Td>{equipo.modelo}</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        )}
      </Box>
    )
  }
  
  export default EquipoInfoTable
  