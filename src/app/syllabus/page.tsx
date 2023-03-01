"use client";

import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Home from "../components/Home";
import { cards } from "../components/database";

export default function page() {
  return (
    <>
      <Home
        title="Syllabus"
        src="https://www.8bellsresearch.com/wp-content/uploads/2021/06/product-research-overview-bg.jpg"
      />

      <Box pt="30px">
        <Container maxW={1400}>
          <Center flexDir="column">
            <Heading size="2xl"> COURSE SYLLABUS </Heading>
            <Text mt="20px" textAlign="center" px="130px">
              {" "}
              The first three quarters are shared by all specialties and are
              dedicated to studying Object-Oriented Programming and cutting-edge
              Full-Stack Web 2.0 development. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each{" "}
            </Text>
          </Center>

          <Center flexDir="column" mt="20px">
            <Heading size="xl"> Common in All </Heading>
            <Text mt="10px" textAlign="center" px="130px">
              Every participant of the program will start by completing the
              following three core courses:{" "}
            </Text>
          </Center>

          <Center>
            <Flex mt="30px" gap="20px">
              <Box
                textAlign="center"
                p="30px"
                boxShadow="dark-lg"
                borderRadius="20px"
                width="300px"
                height='190px'
              >
                <Heading> Quarter I</Heading>
                <Text pt="5px">
                  CS-101: Object-Oriented Programming using TypeScript and
                  Typescript for React
                </Text>
              </Box>
              <Box
                textAlign="center"
                p="30px"
                boxShadow="dark-lg"
                borderRadius="20px"
                width="300px"
                height='240px'
              >
                <Heading> Quarter II</Heading>
                <Text pt="5px">
                  W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using
                  Next.js 13 and Cloud Development Kit (CDK) for Terraform
                </Text>
              </Box>
              <Box
                textAlign="center"
                p="30px"
                boxShadow="dark-lg"
                borderRadius="20px"
                width="300px"
                height='190px'
              >
                <Heading> Quarter III </Heading>
                <Text pt="5px">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </Text>
              </Box>
            </Flex>
          </Center>

          <Center flexDir="column" mt="20px">
            <Heading size="xl"> Specialized Tracks</Heading>
            <Text mt="10px" textAlign="center" px="130px">
              After completing the first two quarters the participants will
              select one or more specializations consisting of two courses each:
            </Text>
          </Center>
        </Container>

        <Container
          maxW={1400}
          mt="30px"
          pt="1px"
          pb="30px"
          bgSize="cover"
          bgAttachment="fixed"
          bgImage="https://t3.ftcdn.net/jpg/03/57/96/98/360_F_357969833_OJe2ircqLJDBsBfE6rva63hpIBzK2vRG.jpg"
        >
          {cards.map((elem) => (
            <Box>
              <Center flexDir="column" mt="50px">
                <Heading size="xl"> {elem.heading1} </Heading>
                <Text
                  mt="10px"
                  textAlign="center"
                  px="130px"
                  fontWeight="medium"
                  color="blackAlpha.600"
                >
                  {elem.text1}
                </Text>
              </Center>

              <Center>
                <Flex mt="30px" gap="20px">
                  <Box
                    bgColor="white"
                    textAlign="center"
                    p="30px"
                    boxShadow="dark-lg"
                    borderRadius="20px"
                    width="350px"
                    key={elem.id}
                  >
                    <Heading> {elem.heading2}</Heading>
                    <Text pt="5px">{elem.text2}</Text>
                  </Box>
                  <Box
                    bgColor="white"
                    textAlign="center"
                    p="30px"
                    boxShadow="dark-lg"
                    borderRadius="20px"
                    width="350px"
                  >
                    <Heading> {elem.heading3}</Heading>
                    <Text pt="5px">{elem.text3}</Text>
                  </Box>
                </Flex>
              </Center>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}
