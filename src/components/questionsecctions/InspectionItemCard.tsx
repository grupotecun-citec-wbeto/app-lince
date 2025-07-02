import {
  Box,
  Grid,
  Text,
  useRadioGroup,
  useRadio,
  useColorModeValue,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import type { UseRadioProps } from '@chakra-ui/react'

// Opciones con íconos y etiquetas
const options = [
  { value: 'si', label: 'SI', icon: '✔️' },
  { value: 'no', label: 'NO', icon: '❗' },
  { value: 'na', label: 'NO APLICA', icon: '✅' },
]

// Radio personalizado como tarjeta
const OptionCard = ({
  icon,
  label,
  ...radioProps
}: UseRadioProps & { icon: ReactNode; label: string }) => {
  const { getInputProps, getRadioProps } = useRadio(radioProps)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as="label">
      <input {...input} hidden />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="sm"
        p={3}
        textAlign="center"
        _checked={{
          bg: 'blue.500',
          color: 'white',
          borderColor: 'blue.600',
        }}
        _hover={{ borderColor: 'blue.300' }}
        transition="all 0.2s"
      >
        <Text fontSize="xl" mb={1}>
          {icon}
        </Text>
        <Text fontSize="sm">{label}</Text>
      </Box>
    </Box>
  )
}

type InspectionItemCardProps = {
  id: string
  label: string
  defaultValue?: string
  onChange?: (value: string) => void
}

const InspectionItemCard = ({
  id,
  label,
  defaultValue = '',
  onChange,
}: InspectionItemCardProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: id,
    defaultValue,
    onChange,
  })

  const group = getRootProps()

  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      borderRadius="lg"
      p={4}
      mb={4}
      bg="white"
    >
      <Box
        bg={useColorModeValue('gray.100', 'gray.700')}
        px={3}
        py={2}
        borderRadius="md"
        mb={3}
      >
        <Text fontWeight="semibold" fontSize="sm">
          {label}
        </Text>
      </Box>

      <Grid
        {...group}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={3}
      >
        {options.map((option) => (
          <OptionCard
            key={option.value}
            {...getRadioProps({ value: option.value })}
            icon={option.icon}
            label={option.label}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default InspectionItemCard
