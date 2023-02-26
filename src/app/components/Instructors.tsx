import { Box, Center, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import {data} from '../components/database' 

interface data {
    id: number,
    src:string,
    heading:string,
    text:string,
}

export default function Instructors() {
  return (
    <>
     
     <Box>
        <Container maxW={1400}>
            <Center>
                <Heading mb={10}> Our Instructors </Heading>
            </Center>
            <Flex flexDir={'row'} display={{ lg: "flex", base: "grid" }}>
                {data.map((ins) => (
                <Box key={ins.id}>
                    <Center>
                        <Image src={ins.src} borderRadius='full' width={120} height={120}/>
                    </Center>
                    
                        <Heading textAlign='center' size='md'> {ins.heading} </Heading>
                        <Text textAlign='center' px='30px' fontSize='sm' mb={10}> {ins.Text} </Text>
                    
                </Box>
                ))},
            </Flex>
        </Container>

     </Box>
    
    
    </>
  )
}
