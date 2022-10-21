import { 
    ChakraProvider, 
    Heading,
    Flex,
    Box,
    Input
} from '@chakra-ui/react'

function Home() {
    return (
      <ChakraProvider>
        <Flex p="5">
          <Box>
            <Input borderColor='#1E2650' focusBorderColor='#1E2650' htmlSize={60} width='auto' placeholder='Search'/>
          </Box>
        </Flex>
      </ChakraProvider>
    );
}

export default Home;