import type { ReactNode } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

type Props = {
  children: ReactNode
  title?: string
}

const ViewLayout = ({ children, title = 'Buscar' }: Props) => {
  const navigate = useNavigate()

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Flex
        align="center"
        bg="blue.400"
        px={4}
        py={3}
        borderBottomRadius="2xl"
        shadow="md"
      >
        <IconButton
          aria-label="Volver"
          icon={<ArrowBackIcon />}
          size="sm"
          variant="ghost"
          color="white"
          onClick={() => navigate(-1)}
          mr={2}
        />
        <Text fontWeight="bold" color="white" fontSize="md">
          {title}
        </Text>
      </Flex>

      {/* Contenido */}
      <Box px={3} py={4}>
        {children}
      </Box>
    </Box>
  )
}

export default ViewLayout
