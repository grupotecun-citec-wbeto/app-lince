import { Box, Grid, Text } from '@chakra-ui/react'

type InspectionGroup = {
  id: number
  titulo: string
  total: number
  completado: number
}

const grupos: InspectionGroup[] = [
  {
    id: 1,
    titulo: 'Preparación maquina para inspección',
    total: 8,
    completado: 0,
  },
  {
    id: 2,
    titulo: 'Nivel de inspección bajo',
    total: 11,
    completado: 0,
  },
  {
    id: 3,
    titulo: 'Chequeo visual',
    total: 6,
    completado: 2,
  },
]

const InspectionGroupGrid = () => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={4}
      mt={4}
      px={3}
    >
      {grupos.map((grupo) => (
        <Box
          as="a"
          href={`/question/${grupo.id}`}
          key={grupo.id}
          p={4}
          border="1px solid"
          borderColor="gray.300"
          borderRadius="lg"
          bg="white"
          boxShadow="sm"
          _hover={{ textDecoration: 'none', boxShadow: 'md' }}
        >
          <Text fontWeight="semibold" fontSize="md" mb={2}>
            {grupo.id}- {grupo.titulo}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {grupo.completado} de {grupo.total}
          </Text>
        </Box>
      ))}
    </Grid>
  )
}

export default InspectionGroupGrid
