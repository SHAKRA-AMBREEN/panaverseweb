import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
// import jpeg from '../../../public/logo2.jpeg'
import React from 'react'

export default function Banner() {
  return (
    <>
    <Box 
    // bg='purple.300' 
    bgImage='/bg1.jpg'
    bgRepeat='no-repeat'>
        <Container maxW={1400}>
            <Flex pt={{lg:'150px', base:'3opx'}} pb='100px' px={{lg:'40px',base:'5px'}}  display={{lg:'flex',base:'grid'}}>
                <Box flexBasis='50%' px='40px'>
                    <Heading size='2xl'>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                    <Text pt='10px' textColor='white'>One Year Panaverse DAO Earn as you Learn Program, Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing / Iot Technologies </Text>
                    <Button size='lg' colorScheme='teal' mt='10px'>More Info</Button>
                </Box>
                <Box mt={{lg:'-1.5',base:'10px'}} flexBasis={{lg:'50%', base:'0%'}}>
                    <Image
                        
                         src="/logo2.png"
                        alt="banner-logo"
                        width={{lg:'600', base:'700'}}
                        height={{lg:'300', base:'250'}}
                         />
                        
                    
                </Box>
            </Flex>

        </Container>
    </Box>

    <Box>
        <Container maxW={1400}>
            <Flex gap={{lg:'100px',base:'10px'}} pt='20px' display={{lg:'flex',base:'grid'}}>
                <Box flexBasis='50%' px='60px'>
                    
                    <Image
                        src="/logo2.png"
                        alt="banner-logo"
                        width={{lg:'600', base:'600'}}
                        height={{lg:'300', base:'250'}}
                    />
                </Box>
                <Box flexBasis='50%' pt={{lg:'40px', base:'10px'}} px={{lg:'0',base:'5px'}} >
                    <Heading  size='2xl'> Program Of Studies </Heading>
                    <Text pr='50px' pt='20px'> The curriculum is intended for beginners who want to learn software development from the groung up. It is going to be a fourteen-month long hybrid program that includes both onsite and online classes and is divided into fie quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects </Text>
                    <Button size='lg' colorScheme='teal' mt='10px' mb='40px'> Read More </Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    
    <Box>
        <Container maxW={1400}>
            <Flex  gap={{lg:'100px',base:'10px'}} pt='20px'  display={{lg:'flex',base:'grid'}}>
            <Box flexBasis='50%' pl={{lg:'40px', base:'10px'}}  px={{lg:'0',base:'5px'}} >
                    <Heading  size='2xl'> What Is Panaverse DAO? </Heading>
                    <Text pr='50px' pt='20px'> Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.
                    </Text>
                    <Button size='lg' colorScheme='teal' mt='10px' mb='40px'> Read More </Button>
                </Box>
                <Box flexBasis='50%' px='60px'>
                    
                    <Image
                        src="/logo2.png"
                        alt="banner-logo"
                        width={{lg:'600', base:'600'}}
                        height={{lg:'300', base:'250'}}
                    />
                </Box>
                
            </Flex>
        </Container>
    </Box>
    
    </>
  )
}
