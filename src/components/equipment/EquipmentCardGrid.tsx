import {
    Box,
    Grid,
    Image,
    Text,
  } from '@chakra-ui/react'

  import farmaljxm90 from '@assets/Farmall_90_JXM_a.png'
  
  const mockCards = [
    {
      id: 1,
      title: 'Título 1',
      description: 'Descripción breve para la tarjeta número 1.',
      image: farmaljxm90,
    },
    {
      id: 2,
      title: 'Título 2',
      description: 'Descripción breve para la tarjeta número 2.',
      image: farmaljxm90,
    },
    {
      id: 3,
      title: 'Título 3',
      description: 'Descripción breve para la tarjeta número 3.',
      image: farmaljxm90,
    },
    {
      id: 4,
      title: 'Título 4',
      description: 'Descripción breve para la tarjeta número 4.',
      image: farmaljxm90,
    },
  ]
  
  const EquipmentCardGrid = () => {
    return (
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={4}
        px={3}
      >
        {mockCards.map((card) => (
          <Box
            key={card.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="sm"
            p={3}
          >
            <Image
              src={card.image}
              alt={card.title}
              borderRadius="md"
              mb={2}
              mx="auto"
            />
            <Text fontWeight="bold" fontSize="md" mb={1}>
              {card.title}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {card.description}
            </Text>
            <Box textAlign="center" mt={2}>
              <a
                href="/client"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#3182CE',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
              Seleccionar equipo
              </a>
            </Box>
          </Box>
        ))}
      </Grid>
    )
  }
  
  export default EquipmentCardGrid
  