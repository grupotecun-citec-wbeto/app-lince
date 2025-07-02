import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Box,
    Icon,
  } from '@chakra-ui/react'
  import { FaBolt } from 'react-icons/fa'

  import InspectionCardGrid from './InspectionCardGrid'

  
  const InspectionTabs = () => {
    return (
      <Tabs variant="solid-rounded" colorScheme="blue" isFitted>
        <TabList
          display="flex"
          justifyContent="space-around"
          bg="white"
          borderRadius="md"
          border="1px solid"
          borderColor="blue.200"
          mx={2}
          mt={3}
          flexWrap="wrap" // Allows tabs to wrap on smaller screens
        >
          <Tab
            fontSize={{ base: 'xs', md: 'sm' }} // Adjust font size for mobile
            fontWeight="bold"
            display="flex"
            alignItems="center"
            gap={1}
            _selected={{ bg: 'blue.500', color: 'white' }}
            flex="1 1 auto" // Ensures tabs take equal space
            textAlign="center" // Centers text for better mobile appearance
          >
            <Icon as={FaBolt} />
            En Curso
          </Tab>
          <Tab
            fontSize={{ base: 'xs', md: 'sm' }} // Adjust font size for mobile
            fontWeight="semibold"
            display="flex"
            alignItems="center"
            gap={1}
            flex="1 1 auto" // Ensures tabs take equal space
            textAlign="center" // Centers text for better mobile appearance
          >
            <Icon as={FaBolt} />
            Asignado
          </Tab>
          <Tab
            fontSize={{ base: 'xs', md: 'sm' }} // Adjust font size for mobile
            fontWeight="semibold"
            display="flex"
            alignItems="center"
            gap={1}
            flex="1 1 auto" // Ensures tabs take equal space
            textAlign="center" // Centers text for better mobile appearance
          >
            <Icon as={FaBolt} />
            Enviado
          </Tab>
        </TabList>
  
        <TabPanels>
          <TabPanel>
            <Box>
              <Box>Contenido de "En curso"</Box>
              <InspectionCardGrid />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>Contenido de "Asignado"</Box>
            <Box>
              <InspectionCardGrid />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>Contenido de "Enviado"</Box>
            <Box>
              <InspectionCardGrid />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    )
  }
  
  export default InspectionTabs
  