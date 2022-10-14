import { 
    ChakraProvider, 
    Heading,
    Flex,
    Box
} from '@chakra-ui/react'

function Home() {
    return (
      <ChakraProvider>
        <Flex p="2">
          <Box>
            <Heading>Home</Heading>
          </Box>
        </Flex>
      </ChakraProvider>
    );
}

export default Home;