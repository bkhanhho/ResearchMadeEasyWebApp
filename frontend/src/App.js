import { 
  ChakraProvider, 
  Heading,
  Center,
  Input, 
  InputGroup, 
  InputLeftElement,
  Stack
   } from '@chakra-ui/react'

import {SearchIcon} from '@chakra-ui/icons'

function App() {
  return (
    <ChakraProvider>
      <Stack spacing={4}>
        <Center>
          <Heading as='h3' size='lg'>
            RESme
          </Heading>
        </Center>
        <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.400' />}/>
            <Input placeholder='Search' />
          </InputGroup>
      </Stack>
    </ChakraProvider>
    
  );
}

export default App;
