import LandingPage from "./LandingPage"
import ReactDOM from "react-dom";
import React from "react";
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { 
  Box,
  Flex,
  ChakraProvider, 
  Heading,
  Center,
  Input, 
  InputGroup, 
  InputLeftElement,
  Stack,
  extendTheme,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  SearchIcon,
  Select, 
  ButtonGroup,
  LinkBox,
  Spacer,
  Button
  } from '@chakra-ui/react'

const colors = {
  brand: {
    blue: '#1E2650',
    tan: '#F3EACO',
    orange: '#DC9750',
    red: '#922C40'
  },
}

const theme = extendTheme({colors})

function App() {
  return (
      <ChakraProvider theme={theme}>
        <Flex p='5' border='1px' borderColor='gray.400' borderRadius='0' minWidth='max-content' alignItems='center'>
          <Box>
            <Heading>
              <Link to='/'>RESme</Link> 
              []
            </Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap='3'>
            <Button bg='#1E2650' textColor='whiteAlpha.800'>
              <Link to='/LandingPage'>Landing Page</Link>
            </Button>
            <Button bg='#1E2650' textColor='whiteAlpha.800'>
              <Link to='/signIn'>Sign in</Link>
            </Button>
          </ButtonGroup>
        </Flex>
        
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/LandingPage" element={<LandingPage />}/>
        <Route path="/signIn" element={<signIn/>}/>
      </Routes>
      </ChakraProvider>

  );
}

//? add home function?

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

export default App;
