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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
  //import {MdArrowDropDown } from '@chakra-ui/react'
  
  function LandingPage() {
    return (
      <ChakraProvider>
        <Stack spacing={4}>
          <Center>
            <Heading as='h3' size='lg'>
              RESme
            </Heading>
          </Center>
          {/* TODO: this is name of the paper */}
          
            <Tabs>
                <TabList>
                <Tab>Details</Tab>
                <Tab>Realated Papers</Tab>
                </TabList>
    
                <TabPanels>
                <TabPanel>
                    <p>This is the Details</p>
                </TabPanel>
                <TabPanel>
                    <p>This is a list of Realated Papers</p>
                </TabPanel>
                </TabPanels>
            </Tabs>
            {/* TODO: This should be on the right of tab */}
            <Link color='teal.500' href='#'>
                Read paper
            </Link>
            
            <Heading as='h6' size='xs'>
                (xs) Paper metadata (author, subject, year)
            </Heading>

            <UnorderedList>
              <ListItem>Paper Summary</ListItem>
              <Divider orientation='horizontal' />
              <ListItem>Proposed System</ListItem>
              <Divider orientation='horizontal' />
              <ListItem>Methods</ListItem>
              <Divider orientation='horizontal' />
              <ListItem>Results</ListItem>
            </UnorderedList>
  
            
        </Stack>
      </ChakraProvider>
      
    );
  }
  
  export default LandingPage;
  