import { Button, Icon } from '@chakra-ui/react'
import { FaBolt } from 'react-icons/fa'

type Props = {
  onClick?: () => void
}

const CreateInspectionButton = ({ onClick }: Props) => {
  return (
    <Button
      mt={4}
      mx={4}
      width="full"
      colorScheme="yellow"
      rightIcon={<Icon as={FaBolt} />}
      onClick={onClick}
      borderRadius="md"
      fontWeight="semibold"
    >
      Crear inspección
    </Button>
  )
}

export default CreateInspectionButton
