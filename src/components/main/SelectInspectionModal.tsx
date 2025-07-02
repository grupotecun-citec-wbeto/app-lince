import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Icon,
    VStack,
  } from '@chakra-ui/react'
  import { FaBolt, FaChevronRight } from 'react-icons/fa'
  
  type Props = {
    isOpen: boolean
    onClose: () => void
  }
  
  const SelectInspectionModal = ({ isOpen, onClose }: Props) => {
    //const handleEquipoClick = () => {
    //  console.log('Seleccionar inspección de EQUIPO')
    //  onClose()
    //}
    const baseUrl = import.meta.env.BASE_URL || '/'

    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
        <ModalOverlay />
        <ModalContent
          mx={4}
          borderRadius="2xl"
          p={4}
          maxW="90%"
          bg="white"
        >
          <ModalHeader textAlign="center" fontSize="lg">
            Seleccionar tipo de inspección
          </ModalHeader>
  
          <ModalBody>
            <VStack spacing={4}>
              <Button
                variant="outline"
                width="full"
                rightIcon={<FaChevronRight />}
                as="a"
                href= {`${baseUrl}searchequipment`}
                //onClick={handleEquipoClick}
              >
                EQUIPO
              </Button>
            </VStack>
          </ModalBody>
  
          <ModalFooter>
            <Button
              as="a"
              href="/home"
              colorScheme="red"
              width="full"
              rightIcon={<Icon as={FaBolt} />}
              onClick={onClose}
              borderRadius="xl"
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }
  
  export default SelectInspectionModal
  