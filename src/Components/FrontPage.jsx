import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import backgroundImage from "../image/Group_17.svg";
import 
import { Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    xsml: "280px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

const FrontPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Center
        bgColor="black"
        bgPosition="0% 1%"
        bgImage={backgroundImage}
        bgSize="600px"
        bgRepeat="no-repeat"
      >
        {/* main container */}
        <Box
          w={{
            xsml: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "90%",
          }}
          maxW="1300px"
          height="100vh"
        >
          {/* Navigation bar */}
          <Flex>
            <Box flex="1"></Box>
            <Box flex="1">
              <UnorderedList
                display="flex"
                listStyleType="none"
                color="white"
                py="2rem"
                justifyContent="flex-end"
              >
                <ListItem
                  px="1.5em"
                  mt="0.7rem"
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Homepage
                </ListItem>
                <ListItem
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                  px="1.5em"
                  mt="0.7rem"
                >
                  Offers
                </ListItem>
                <ListItem
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                  px="1.5em"
                  mt="0.7rem"
                >
                  Support
                </ListItem>
                <ListItem
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                  px="1.5em"
                >
                  <Button
                    size="lg"
                    px="3rem"
                    borderRadius="25px"
                    bgColor="blue"
                  >
                    Register
                  </Button>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
          {/* Closung of navigation bar */}
          {/* 2nd section */}
          <Flex>
            <Box flex="1"></Box>
            <Box flex="1">
              <Image src={}></Image>
            </Box>
          </Flex>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default FrontPage;
