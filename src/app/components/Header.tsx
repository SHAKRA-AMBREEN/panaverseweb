"use client";

import { Box, Container, SimpleGrid, Flex, Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import logo from "../../../public/weblogo.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Box boxShadow="lg" pt="5px">
        <Container maxWidth={1400}>
          <SimpleGrid templateColumns="repeat(3, 1fr )">
            <Box>
              <Image
                src={logo}
                alt="panaverse-logo"
                width={100}
                height={200}
              ></Image>
            </Box>
            <Flex
              display={{ lg: "flex", base: "none" }}
              color="black"
              placeItems="center"
              fontSize={18}
              fontWeight="semibold"
              gap={10}
            >
              <Link href="/"> Home </Link>
              <Link href="/syllabus"> Syllabus </Link>
              <Link href="/explore"> Explore </Link>
              <Link href="/about"> About </Link>
              <Link href="/contact"> Contact </Link>
            </Flex>
            <Box>
              <Button
                display={{ lg: "flex", base: "none" }}
                mt="5px"
                colorScheme="teal"
                float="right"
                size="lg"
              >
                Apply
              </Button>
            </Box>
            <Box pt={2}>
              <Menu>
                <MenuButton
                  float="right"
                  display={{ lg: "none", base: "initial" }}
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <Link href="./">
                    {" "}
                    <MenuItem>Home</MenuItem>{" "}
                  </Link>
                  <MenuItem>Syllabus</MenuItem>
                  <MenuItem>Explore</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Contact</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
