import { 
  ChakraProvider, 
  Heading,
  Center,
  Input, 
  InputGroup, 
  InputLeftElement,
  Stack,
   } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import { Select } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

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

          <Select placeholder='Filter and Sort'>
            <option value='option1'>Artificial Intelligence</option>
            <option value='option2'>Computer Vision & Pattern Recognition</option>
            <option value='option3'>Distributed Parallel & Cluster Computing</option>
          </Select>

          <UnorderedList>
            <ListItem>A random link 1</ListItem>
            <ListItem>A random link 2</ListItem>
            <ListItem>A random link 3</ListItem>
            <ListItem>A random link 4</ListItem>
          </UnorderedList>
      </Stack>
    </ChakraProvider>
    
  );
}

export default App;
