"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Grid,
  Image,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
// import Image from "next/image";
// import logo from "../../../public/weblogo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Box bg="black">
        <Container maxW={1300}>
          <SimpleGrid
            textAlign={{ lg: "start", base: "center" }}
            spacing="20px"
            py="60px"
            templateColumns={{ base: "repeat(1, 1fr )", lg: "repeat(4, 1fr )" }}
          >
            <Box>
              <Heading pb="10px" color="white">
                About Us
              </Heading>
              <Image
                m={{ base: "auto", lg: "start" }}
                ml={{base:'35%',lg:'0'}}
                src="/weblogo.png"
                alt="panaverse-logo"
                width={200}
                height={100}
              ></Image>
              <Text pt="10px" pr="{{lg:'50px', base: '0px'}}" color="grey">
                {" "}
                The future of the web3.0 and Metaverse, and Edge Computing,
                Panaverse DAO is a movement to spread these technologies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers,startup founders and service providers.{" "}
              </Text>
            </Box>
            <Box>
              <Heading color="white"> Useful Links </Heading>
              <Grid pt="40px" color="gray">
                <Link href="/"> Home </Link>
                <Link href="/syllabus"> Syllabus </Link>
                <Link href="/explore"> Explore </Link>
                <Link href="/about"> About </Link>
                <Link href="/contact"> Contact </Link>
              </Grid>
            </Box>
            <Box>
              <Heading color="white"> Follow Us </Heading>
              <Grid pt="40px" color="gray">
                <Link href="/"> Facebook </Link>
                <Link href="/"> Youtube </Link>
                <Link href="/"> Twitter </Link>
                <Link href="/"> Linkedin </Link>
                <Link href="/"> Github </Link>
              </Grid>
            </Box>
            <Box>
              <Heading color="white"> Contact Us </Heading>
              <Grid pt="40px" color="gray">
                <Link href="/">
                  {" "}
                  <PhoneIcon /> +92 123 4567890{" "}
                </Link>
                <Link href="/">
                  {" "}
                  <EmailIcon /> abcd@gmail.com{" "}
                </Link>
                <Link href="/"> Islamabad, Pakistan </Link>
              </Grid>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
