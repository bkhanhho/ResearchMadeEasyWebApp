import React from "react";
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
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
  Select 
  } from '@chakra-ui/react'

const colors = {
  brand: {
    blue: '#FF0000',
    tan: '#F3EACO',
    orange: '#DC9750',
    red: '#922C40'
  },
}

const theme = extendTheme({colors})

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
            <Heading>RESme</Heading>
          </Box>
        </Flex>
      </ChakraProvider>
    </Router>
  );
}

export default App;
