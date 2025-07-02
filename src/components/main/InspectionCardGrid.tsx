import { Box, Grid, Text } from '@chakra-ui/react'

type Inspection = {
  id: string
  titulo: string
  estado: string
  serie: string
  modelo: string
  direccion: string
  fechaActualizacion: string
  numeroInspeccion: string
}

const mockInspections: Inspection[] = [
  {
    id: '1',
    titulo: 'DEVELON DX220',
    estado: 'EN CURSO',
    serie: 'adfasdfasdfasdfasdf',
    modelo: 'DX220',
    direccion: 'Guatemala, Guatemala',
    fechaActualizacion: '7/4/2025',
    numeroInspeccion: '13215424554',
  },
  {
    id: '2',
    titulo: 'CASE CX220',
    estado: 'EN CURSO',
    serie: 'adfjassdjkadafdjakjd',
    modelo: 'CX220',
    direccion: 'Guatemala, Guatemala',
    fechaActualizacion: '7/4/2025',
    numeroInspeccion: '5878978778',
  },
  {
    id: '3',
    titulo: 'CAT 320D',
    estado: 'COMPLETADO',
    serie: 'cat320d123456789',
    modelo: '320D',
    direccion: 'Antigua, Guatemala',
    fechaActualizacion: '6/15/2025',
    numeroInspeccion: '9876543210',
  },
  {
    id: '4',
    titulo: 'VOLVO EC220',
    estado: 'EN CURSO',
    serie: 'volvoec220987654321',
    modelo: 'EC220',
    direccion: 'Quetzaltenango, Guatemala',
    fechaActualizacion: '7/1/2025',
    numeroInspeccion: '1234567890',
  },
  {
    id: '5',
    titulo: 'KOMATSU PC200',
    estado: 'PENDIENTE',
    serie: 'komatsupc200123456',
    modelo: 'PC200',
    direccion: 'Escuintla, Guatemala',
    fechaActualizacion: '6/20/2025',
    numeroInspeccion: '1122334455',
  },
  {
    id: '6',
    titulo: 'HITACHI ZX210',
    estado: 'COMPLETADO',
    serie: 'hitachizx210987654',
    modelo: 'ZX210',
    direccion: 'Cobán, Guatemala',
    fechaActualizacion: '6/10/2025',
    numeroInspeccion: '6677889900',
  },
]

const InspectionCardGrid = () => {
  return (
    <Grid px={2} mt={3} gap={3} templateColumns={{base:"repeat(1, 1fr)", md:"repeat(3, 1fr)"}} >
      {mockInspections.map((inspection) => (
      <Box
        key={inspection.id}
        borderWidth="1px"
        borderRadius="lg"
        p={3}
        bg="white"
        boxShadow="sm"
      >
        <Text fontWeight="bold" fontSize="md">
        {inspection.titulo}
        </Text>
        <Text fontSize="xs" fontWeight="bold" color="blue.500">
        {inspection.estado}
        </Text>
        <Text fontSize="sm">
        <b>Serie:</b> {inspection.serie}
        </Text>
        <Text fontSize="sm">
        <b>Modelo:</b> {inspection.modelo}
        </Text>
        <Text fontSize="sm">
        <b>Dirección:</b> {inspection.direccion}
        </Text>
        <Text fontSize="sm" mt={2} color="gray.500">
        Última actualización: {inspection.fechaActualizacion}
        </Text>
        <Text fontSize="sm" color="gray.500">
        Número de inspección: {inspection.numeroInspeccion}
        </Text>
      </Box>
      ))}
    </Grid>
  )
}

export default InspectionCardGrid
