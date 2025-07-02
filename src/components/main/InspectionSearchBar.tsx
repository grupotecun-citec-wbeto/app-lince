import {
    InputGroup,
    InputLeftElement,
    Input,
  } from '@chakra-ui/react'
  import { SearchIcon } from '@chakra-ui/icons'
  
  const InspectionSearchBar = () => {
    return (
      <InputGroup mt={3} px={2}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />}
        />
        <Input
          type="text"
          placeholder="Inspecciones del filtro"
          size="sm"
          borderColor="gray.300"
          focusBorderColor="blue.400"
          _placeholder={{ color: 'gray.400' }}
          borderRadius="md"
          bg="white"
        />
      </InputGroup>
    )
  }
  
  export default InspectionSearchBar
  