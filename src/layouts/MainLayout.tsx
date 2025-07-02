import type { ReactNode } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Text,
  Spacer,
} from '@chakra-ui/react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import { FaFileAlt, FaHeart, FaClipboardList } from 'react-icons/fa'

type Props = {
  title: string
  onOpenModal?: () => void
  children: ReactNode
}

const MainLayout = ({ title, children, onOpenModal }: Props) => {
  return (
    <Flex direction="column" minH="100vh" bg="gray.50">
      {/* Header */}
      <Flex
        align="center"
        bg="blue.400"
        px={4}
        py={3}
        borderBottomRadius="2xl"
        shadow="md"
      >
        <Text fontWeight="bold" color="white">
          {title}
        </Text>
        <Spacer />
        <IconButton
          aria-label="Agregar"
          icon={<AddIcon />}
          size="sm"
          colorScheme="orange"
          mr={2}
          onClick={onOpenModal}
        />
        <IconButton
          aria-label="Buscar"
          icon={<SearchIcon />}
          size="sm"
          color="white"
          bg="transparent"
          _hover={{ bg: 'blue.500' }}
        />
      </Flex>

      {/* Contenido */}
      <Box flex="1" p={4}>
        {children}
      </Box>

      {/* Bottom Tab Navigation Footer */}
      <Flex
        justify="space-around"
        align="center"
        py={2}
        bg="blue.400"
        color="white"
        borderTopRadius="xl"
      >
        <Flex direction="column" align="center">
          <FaClipboardList size={20} />
          <Text fontSize="xs">Inspecciones</Text>
        </Flex>
        <Flex direction="column" align="center">
          <FaFileAlt size={20} />
          <Text fontSize="xs">Informes</Text>
        </Flex>
        <Flex direction="column" align="center">
          <FaHeart size={20} />
          <Text fontSize="xs">Favoritos</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MainLayout
