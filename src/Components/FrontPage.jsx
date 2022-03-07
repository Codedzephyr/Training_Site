import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import NavbarHeaderImage from "../image/Group_20.svg";
import LearnImage from "../image/undraw_font_re_efri.svg";
import ProductDesignImage from "../image/undraw_design_tools_-42-tf.svg";
import FrontEndDesignImage from "../image/undraw_programming_re_kg9v.svg";
import JavaImage from "../image/undraw_developer_activity_re_39tg.svg";
import PythonImage from "../image/undraw_artificial_intelligence_re_enpp.svg";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
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
  shadows: {
    xs: "0px 0px 5px #EA00B78C",
  },
});

const FrontPage = () => {
  const [isDisplayNavigationBar, setNavigationBarDisplay] = useState(false);

  const handleclickShow = () => {
    setNavigationBarDisplay(!isDisplayNavigationBar);
  };
  return (
    <ChakraProvider theme={theme}>
      <Center w="100%" bgColor="black" overflow="hidden">
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
        >
          {/* Navigation bar */}
          <Flex
            flexDirection={{
              xsml: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box flex="1">
              <Flex>
                <Flex flex="1" gap={3}>
                  <Box
                    display={{
                      xsml: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    }}
                  >
                    <Image
                      my={{
                        xsml: "2.5rem",
                        sm: "1.5rem",
                        md: "1.5rem",
                        lg: "1.5rem",
                        xl: "1.5rem",
                      }}
                      display="inline-block"
                      src={NavbarHeaderImage}
                    />
                  </Box>
                  <Box flex="1">
                    <Text
                      fontSize="1.9rem"
                      fontWeight="600"
                      color="white"
                      my={{
                        xsml: "2.3rem",
                        sm: "2.3rem",
                        md: "2.5rem",
                        lg: "2.5rem",
                        xl: "2.5rem",
                      }}
                    >
                      Coursewind
                    </Text>
                  </Box>
                </Flex>
                <Box flex="1">
                  <Box
                    my="2.9rem"
                    display={{
                      xsml: "flex",
                      sm: "flex",
                      md: "flex",
                      lg: "none",
                      xl: "none",
                    }}
                    justifyContent="flex-end"
                    cursor="pointer"
                    onClick={handleclickShow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="25"
                      height="25"
                    >
                      <path
                        fill="#fff"
                        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                      />
                    </svg>
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box flex="1">
              <UnorderedList
                display={{
                  xsml: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                }}
                flexDirection={{
                  xsml: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                }}
                listStyleType="none"
                color="white"
                py={{
                  xsml: "0em",
                  sm: "0em",
                  md: "0em",
                  lg: "2em",
                  xl: "2em",
                }}
                justifyContent={{
                  xsml: "flex-start",
                  sm: "flex-start",
                  md: "flex-start",
                  lg: "flex-end",
                  xl: "flex-end",
                }}
              >
                <ListItem
                  px="1.5em"
                  mt="0.7rem"
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                  textAlign={{
                    xsml: "center",
                    sm: "center",
                    md: "center",
                    lg: "initial",
                    xl: "initial",
                  }}
                  fontSize={{
                    xsml: "1.2rem",
                    sm: "1.5em",
                    md: "1.2rem",
                    lg: "initial",
                    xl: "initial",
                  }}
                  fontWeight={{
                    xsml: "600",
                    sm: "600",
                    md: "600",
                    lg: "normal",
                    xl: "normal",
                  }}
                >
                  Homepage
                </ListItem>
                <ListItem
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                  textAlign={{
                    xsml: "center",
                    sm: "center",
                    md: "center",
                    lg: "initial",
                    xl: "initial",
                  }}
                  px="1.5em"
                  mt={{
                    xsml: "1.5rem",
                    sm: "1.2rem",
                    md: "1.2rem",
                    lg: "0.7rem",
                    xl: "0.7rem",
                  }}
                  fontSize={{
                    xsml: "1.2rem",
                    sm: "1.5em",
                    md: "1.2rem",
                    lg: "initial",
                    xl: "initial",
                  }}
                  fontWeight={{
                    xsml: "600",
                    sm: "600",
                    md: "600",
                    lg: "normal",
                    xl: "normal",
                  }}
                >
                  Offers
                </ListItem>
                <ListItem
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                  textAlign={{
                    xsml: "center",
                    sm: "center",
                    md: "center",
                    lg: "initial",
                    xl: "initial",
                  }}
                  px="1.5em"
                  mt={{
                    xsml: "1.5rem",
                    sm: "1.2rem",
                    md: "1.2rem",
                    lg: "0.7rem",
                    xl: "0.7rem",
                  }}
                  fontSize={{
                    xsml: "1.2rem",
                    sm: "1.5em",
                    md: "1.2rem",
                    lg: "initial",
                    xl: "initial",
                  }}
                  fontWeight={{
                    xsml: "600",
                    sm: "600",
                    md: "600",
                    lg: "normal",
                    xl: "normal",
                  }}
                >
                  Support
                </ListItem>
                <ListItem
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                  px="1.5em"
                  display={{
                    xsml: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "block",
                    xl: "block",
                  }}
                  justifyContent={{
                    xsml: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                    xl: "flex-start",
                  }}
                  mt={{
                    xsml: "1.5rem",
                    sm: "1.2rem",
                    md: "1.2rem",
                    lg: "0rem",
                    xl: "0rem",
                  }}
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
              {/* small screens */}
              {isDisplayNavigationBar ? (
                <UnorderedList
                  display={{
                    xsml: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "none",
                    xl: "none",
                  }}
                  flexDirection={{
                    xsml: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                    xl: "row",
                  }}
                  listStyleType="none"
                  color="white"
                  py={{
                    xsml: "0em",
                    sm: "0em",
                    md: "0em",
                    lg: "2em",
                    xl: "2em",
                  }}
                  justifyContent={{
                    xsml: "flex-start",
                    sm: "flex-start",
                    md: "flex-start",
                    lg: "flex-end",
                    xl: "flex-end",
                  }}
                >
                  <ListItem
                    px="1.5em"
                    mt="0.7rem"
                    _hover={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                    textAlign={{
                      xsml: "center",
                      sm: "center",
                      md: "center",
                      lg: "initial",
                      xl: "initial",
                    }}
                    fontSize={{
                      xsml: "1.2rem",
                      sm: "1.5em",
                      md: "1.2rem",
                      lg: "initial",
                      xl: "initial",
                    }}
                    fontWeight={{
                      xsml: "600",
                      sm: "600",
                      md: "600",
                      lg: "normal",
                      xl: "normal",
                    }}
                  >
                    Homepage
                  </ListItem>
                  <ListItem
                    _hover={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                    textAlign={{
                      xsml: "center",
                      sm: "center",
                      md: "center",
                      lg: "initial",
                      xl: "initial",
                    }}
                    px="1.5em"
                    mt={{
                      xsml: "1.5rem",
                      sm: "1.2rem",
                      md: "1.2rem",
                      lg: "0.7rem",
                      xl: "0.7rem",
                    }}
                    fontSize={{
                      xsml: "1.2rem",
                      sm: "1.5em",
                      md: "1.2rem",
                      lg: "initial",
                      xl: "initial",
                    }}
                    fontWeight={{
                      xsml: "600",
                      sm: "600",
                      md: "600",
                      lg: "normal",
                      xl: "normal",
                    }}
                  >
                    Offers
                  </ListItem>
                  <ListItem
                    _hover={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                    textAlign={{
                      xsml: "center",
                      sm: "center",
                      md: "center",
                      lg: "initial",
                      xl: "initial",
                    }}
                    px="1.5em"
                    mt={{
                      xsml: "1.5rem",
                      sm: "1.2rem",
                      md: "1.2rem",
                      lg: "0.7rem",
                      xl: "0.7rem",
                    }}
                    fontSize={{
                      xsml: "1.2rem",
                      sm: "1.5em",
                      md: "1.2rem",
                      lg: "initial",
                      xl: "initial",
                    }}
                    fontWeight={{
                      xsml: "600",
                      sm: "600",
                      md: "600",
                      lg: "normal",
                      xl: "normal",
                    }}
                  >
                    Support
                  </ListItem>
                  <ListItem
                    _hover={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                    px="1.5em"
                    display={{
                      xsml: "flex",
                      sm: "flex",
                      md: "flex",
                      lg: "block",
                      xl: "block",
                    }}
                    justifyContent={{
                      xsml: "center",
                      sm: "center",
                      md: "center",
                      lg: "flex-start",
                      xl: "flex-start",
                    }}
                    mt={{
                      xsml: "1.5rem",
                      sm: "1.2rem",
                      md: "1.2rem",
                      lg: "0rem",
                      xl: "0rem",
                    }}
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
              ) : (
                <Box></Box>
              )}
            </Box>
          </Flex>
          {/* Closung of navigation bar */}
          {/* 2nd section */}
          <Flex
            my="2.7rem"
            flexDirection={{
              xsml: "column",
              sm: "colum",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box
              flex="1"
              display={{
                xsml: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              }}
            >
              <Text
                color="white"
                fontSize="clamp(1.5rem,10vw,3.5rem)"
                fontWeight="500"
              >
                Learn,Build, <br></br>
                Grow...
              </Text>
              <Text
                color="white"
                fontSize="clamp(0.7rem,5vw,1.3rem)"
                lineHeight="1.7"
              >
                Learn how to code,design usable and accessible <br />
                user interface and conduct user experience <br />
                research.
              </Text>
              <Box
                display={{
                  xsml: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "block",
                  xl: "block",
                }}
                justifyContent={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                  xl: "flex-start",
                }}
                mt={{
                  xsml: "1.5rem",
                  sm: "1.2rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                }}
              >
                <Button
                  size="lg"
                  px="3rem"
                  borderRadius="25px"
                  color="white"
                  bgColor="blue"
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                    bgColor: "white",
                  }}
                >
                  Register
                </Button>
              </Box>
            </Box>
            <Box flex="1">
              <Box>
                <Image margin="0 auto" src={LearnImage}></Image>
              </Box>
            </Box>
            {/* for smaller screens */}
            <Box
              flex="1"
              display={{
                xsml: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              }}
            >
              <Text
                color="white"
                fontSize="clamp(1.5rem,10vw,3.5rem)"
                fontWeight="500"
                margin={{
                  xsml: "1.7rem",
                  sm: "1.7rem",
                  md: "1.7rem",
                  lg: "0",
                  xl: "0",
                }}
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
              >
                Learn,Build, <br></br>
                Grow...
              </Text>
              <Text
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
                color="white"
                fontSize="clamp(0.8rem,5vw,1.3rem)"
                lineHeight="1.7"
              >
                Learn how to code,design usable and accessible user interface
                and conduct user experience research
              </Text>
              <Box
                _hover={{
                  color: "blue",
                  cursor: "pointer",
                }}
                display={{
                  xsml: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "block",
                  xl: "block",
                }}
                justifyContent={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                  xl: "flex-start",
                }}
                mt={{
                  xsml: "1.5rem",
                  sm: "1.2rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                }}
              >
                <Button
                  size="lg"
                  px="3rem"
                  borderRadius="25px"
                  bgColor="blue"
                  color="white"
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                    bgColor: "white",
                  }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Flex>
          <Box>
            <Text
              color="white"
              fontSize="clamp(1.7rem,5vw,1.3rem)"
              textAlign="center"
              opacity="0.6"
            >
              what we teach
            </Text>
            <Text
              color="white"
              fontSize="clamp(1.9rem,5vw,2.5rem)"
              textAlign="center"
              fontWeight="600"
            >
              What We offer
            </Text>
          </Box>
          <Flex
            my={{
              xsml: "5rem",
              sm: "5rem",
              md: "9rem",
              lg: "9rem",
              xl: "9rem",
            }}
            flexDirection={{
              xsml: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box flex="1">
              <Image src={ProductDesignImage} />
            </Box>
            <Box flex="1">
              <Box
                mx={{
                  xsml: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "3rem",
                  xl: "3rem",
                }}
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
              >
                <Text
                  color="white"
                  fontSize="clamp(1.1rem,10vw,2.5rem)"
                  fontWeight="600"
                  mt={{
                    xsml: "1rem",
                    sm: "1rem",
                    md: "0rem",
                    lg: "0rem",
                    xl: "0rem",
                  }}
                >
                  Product Design
                </Text>
                <Text
                  color="white"
                  fontSize="clamp(0.7rem,10vw,1.3rem)"
                  my={{
                    xsml: "1.5rem",
                    sm: "1.5rem",
                    md: "1.5rem",
                    lg: "2.5rem",
                    xl: "2.5rem",
                  }}
                  lineHeight="1.7"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus consequatur dolores in excepturi, temporibus possimus
                  optio hic esse sunt, rem iste aperiam cum, odit libero
                  dignissimos vero cupiditate eveniet labore!
                </Text>
                <Box
                  display={{
                    xsml: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "block",
                    xl: "block",
                  }}
                  justifyContent={{
                    xsml: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                    xl: "flex-start",
                  }}
                  mt={{
                    xsml: "1.5rem",
                    sm: "1.2rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                    xl: "1.2rem",
                  }}
                >
                  <Button
                    size="lg"
                    px="3rem"
                    borderRadius="25px"
                    bgColor="blue"
                    color="white"
                    _hover={{
                      color: "blue",
                      cursor: "pointer",
                      bgColor: "white",
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
          <Flex
            my="9.7rem"
            flexDirection={{
              xsml: "column",
              sm: "colum",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box
              flex="1"
              display={{
                xsml: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              }}
            >
              <Text
                color="white"
                fontSize="clamp(1.5rem,10vw,2.5rem)"
                fontWeight="600"
              >
                FrontEnd Web Development
              </Text>
              <Text
                color="white"
                fontSize="clamp(0.7rem,10vw,1.3rem)"
                my={{
                  xsml: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "2.5rem",
                  xl: "2.5rem",
                }}
                lineHeight="1.7"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                consequatur dolores in excepturi, temporibus possimus optio hic
                esse sunt, rem iste aperiam cum, odit libero dignissimos vero
                cupiditate eveniet labore!XX
              </Text>
              <Box
                display={{
                  xsml: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "block",
                  xl: "block",
                }}
                justifyContent={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                  xl: "flex-start",
                }}
                mt={{
                  xsml: "1.5rem",
                  sm: "1.2rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                }}
              >
                <Button
                  size="lg"
                  px="3rem"
                  borderRadius="25px"
                  color="white"
                  bgColor="blue"
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                    bgColor: "white",
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
            <Box flex="1" position="relative">
              <Image margin="0 auto" src={FrontEndDesignImage}></Image>
            </Box>
            {/* for smaller screens */}
            <Box
              flex="1"
              display={{
                xsml: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              }}
            >
              <Text
                color="white"
                my="0.4rem"
                fontSize="clamp(1.1rem,10vw,2.5rem)"
                fontWeight="600"
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
                mt={{
                  xsml: "1rem",
                  sm: "1rem",
                  md: "0rem",
                  lg: "0rem",
                  xl: "0rem",
                }}
              >
                FrontEnd Web Development
              </Text>
              <Text
                color="white"
                fontSize="clamp(0.7rem,10vw,1.3rem)"
                my={{
                  xsml: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "0rem",
                  xl: "0rem",
                }}
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
                lineHeight="1.7"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                consequatur dolores in excepturi, temporibus possimus optio hic
                esse sunt, rem iste aperiam cum, odit libero dignissimos vero
                cupiditate eveniet labore!
              </Text>
              <Box
                display={{
                  xsml: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "block",
                  xl: "block",
                }}
                justifyContent={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                  xl: "flex-start",
                }}
                mt={{
                  xsml: "1.5rem",
                  sm: "1.2rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                }}
              >
                <Button
                  size="lg"
                  px="3rem"
                  borderRadius="25px"
                  bgColor="blue"
                  color="white"
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                    bgColor: "white",
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Flex>
          <Flex
            my="9rem"
            flexDirection={{
              xsml: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box flex="1">
              <Center>
                <Image w="100%" src={JavaImage} />
              </Center>
            </Box>
            <Box flex="1">
              <Box
                mx={{
                  xsml: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "3rem",
                  xl: "3rem",
                }}
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
              >
                <Text
                  color="white"
                  fontSize="clamp(1.1rem,10vw,2.5rem)"
                  fontWeight="600"
                  mt={{
                    xsml: "1rem",
                    sm: "1rem",
                    md: "0rem",
                    lg: "0rem",
                    xl: "0rem",
                  }}
                >
                  JAVA
                </Text>
                <Text
                  color="white"
                  fontSize="clamp(0.7rem,10vw,1.3rem)"
                  my={{
                    xsml: "1.5rem",
                    sm: "1.5rem",
                    md: "1.5rem",
                    lg: "2.5rem",
                    xl: "2.5rem",
                  }}
                  lineHeight="1.7"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus consequatur dolores in excepturi, temporibus possimus
                  optio hic esse sunt, rem iste aperiam cum, odit libero
                  dignissimos vero cupiditate eveniet labore!
                </Text>
                <Box
                  display={{
                    xsml: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "block",
                    xl: "block",
                  }}
                  justifyContent={{
                    xsml: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                    xl: "flex-start",
                  }}
                  mt={{
                    xsml: "1.5rem",
                    sm: "1.2rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                    xl: "1.2rem",
                  }}
                >
                  <Button
                    size="lg"
                    px="3rem"
                    borderRadius="25px"
                    bgColor="blue"
                    color="white"
                    _hover={{
                      color: "blue",
                      cursor: "pointer",
                      bgColor: "white",
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
          <Flex
            my={{
              xsml: "6.7rem",
              sm: "6.7rem",
              md: "6.7rem",
              lg: "9.7rem",
              xl: "9.7rem",
            }}
            flexDirection={{
              xsml: "column",
              sm: "colum",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box
              flex="1"
              display={{
                xsml: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              }}
            >
              <Text
                color="white"
                fontSize="clamp(1.5rem,10vw,2.5rem)"
                fontWeight="600"
              >
                Python and Machine Learning
              </Text>
              <Text
                color="white"
                fontSize="clamp(0.9rem,10vw,1.3rem)"
                my={{
                  xsml: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "2.5rem",
                  xl: "2.5rem",
                }}
                lineHeight="1.7"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                consequatur dolores in excepturi, temporibus possimus optio hic
                esse sunt, rem iste aperiam cum, odit libero dignissimos vero
                cupiditate eveniet labore!XX
              </Text>
              <Box
                display={{
                  xsml: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "block",
                  xl: "block",
                }}
                justifyContent={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                  xl: "flex-start",
                }}
                mt={{
                  xsml: "1.5rem",
                  sm: "1.2rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                }}
              >
                <Button
                  size="lg"
                  px="3rem"
                  borderRadius="25px"
                  color="white"
                  bgColor="blue"
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                    bgColor: "white",
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
            <Box flex="1">
              <Image margin="0 auto" src={PythonImage}></Image>
            </Box>
            {/* for smaller screens */}
            <Box
              flex="1"
              display={{
                xsml: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              }}
            >
              <Text
                color="white"
                fontSize="clamp(1.1rem,10vw,2.5rem)"
                fontWeight="600"
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
                mt={{
                  xsml: "1.5rem",
                  sm: "1.5rem",
                  md: "0rem",
                  lg: "0rem",
                  xl: "0rem",
                }}
              >
                Python and Machine Learning
              </Text>
              <Text
                color="white"
                fontSize="clamp(0.7rem,10vw,1.3rem)"
                my={{
                  xsml: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "0rem",
                  xl: "0rem",
                }}
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
                lineHeight="1.7"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                consequatur dolores in excepturi, temporibus possimus optio hic
                esse sunt, rem iste aperiam cum, odit libero dignissimos vero
                cupiditate eveniet labore!
              </Text>
              <Box
                display={{
                  xsml: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "block",
                  xl: "block",
                }}
                justifyContent={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                  xl: "flex-start",
                }}
                mt={{
                  xsml: "1.5rem",
                  sm: "1.2rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                }}
              >
                <Button
                  size="lg"
                  px="3rem"
                  borderRadius="25px"
                  bgColor="blue"
                  color="white"
                  _hover={{
                    color: "blue",
                    cursor: "pointer",
                    bgColor: "white",
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Flex>
          <Box>
            <Box my="2rem">
              <Text
                color="white"
                fontSize="clamp(1.0rem,5vw,1.1rem)"
                textAlign="center"
                opacity="0.7"
              >
                stay informed
              </Text>
              <Text
                color="white"
                fontSize="clamp(1.8rem,5vw,2.3rem)"
                textAlign="center"
                fontWeight="600"
              >
                Support
              </Text>
            </Box>
            <Center mb="0.5rem">
              <Box w="100%" maxW="600px">
                <InputGroup>
                  <Input
                    placeholder="Email Address"
                    py="1.7em"
                    bgColor="white"
                    _placeholder={{ color: "#383838" }}
                    borderRadius="36px"
                  />
                  <InputRightElement w="10rem">
                    <Button
                      size="lg"
                      mt="1.0rem"
                      mr="0.3rem"
                      px="3rem"
                      borderRadius="25px"
                      bgColor="blue"
                      color="white"
                      _hover={{
                        color: "white",
                        cursor: "pointer",
                        bgColor: "blue",
                      }}
                    >
                      Subscribe
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Center>
            <Center my="1.7rem">
              <Flex w="40%" maxW="230px">
                <Box
                  flex="1"
                  display={{
                    xsml: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  }}
                >
                  <Image src={NavbarHeaderImage} />
                </Box>
                <Box flex="1">
                  <Text fontSize="1.4rem" fontWeight="600" color="white">
                    Coursewind
                  </Text>
                  <HStack spacing="5px">
                    <Box>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7481 10.369C12.7481 10.369 11.2411 12.11 8.12472 13.2891C5.00836 14.4682 3.58502 14.0075 3.58502 14.0075C3.58502 14.0075 1.9864 13.7599 3.64372 16.0228C5.0036 17.8796 8.20384 17.6493 8.20384 17.6493C8.20384 17.6493 12.1945 17.6556 14.7842 15.0618C17.374 12.468 17.1569 11.1534 16.9433 10.2502C16.7297 9.347 12.7481 10.3691 12.7481 10.3691L12.7481 10.369Z"
                          fill="#01A9F4"
                        />
                        <path
                          d="M11.8956 8.51294C11.8956 8.51294 9.83158 9.73997 6.35986 9.88147C2.88814 10.023 1.63123 9.0988 1.63123 9.0988C1.63123 9.0988 0.130764 8.32784 1.02629 11.1124C1.76109 13.3972 5.00371 14.2221 5.00371 14.2221C5.00371 14.2221 8.95057 15.5413 12.3666 13.8266C15.7827 12.1119 16.0003 10.7396 16.0861 9.77555C16.172 8.8115 11.8956 8.51294 11.8956 8.51294Z"
                          fill="#01C0F4"
                        />
                        <path
                          d="M16.7714 2.13525C13.954 2.13824 11.6717 4.42296 11.6717 7.24031C11.6718 7.59694 11.7094 7.95258 11.7836 8.3014C11.0473 8.29064 9.08207 8.14769 6.58743 6.99632C3.43263 5.54026 2.73451 4.14483 2.73451 4.14483C2.73451 4.14483 1.75035 2.775 1.2786 5.66174C0.891517 8.0304 3.40213 10.2419 3.40213 10.2419C3.40213 10.2419 6.31387 13.2152 10.136 13.2456C11.8918 13.2595 11.0411 14.7902 9.83305 15.8236C5.00985 19.9491 4.35395 19.2636 2.92823 19.1423C2.18395 19.0789 1.56755 19.8862 3.02944 20.7302C6.22356 22.5744 13.8068 22.6494 18.0537 17.2802C21.6479 12.7361 21.9755 8.63674 21.9562 7.34554C22.43 7.0838 22.8542 6.75638 23.0495 6.35885C23.6251 5.18679 22.8289 5.32591 22.8289 5.32591L21.9274 5.3782C22.4554 4.97715 22.9489 4.48589 23.083 3.95849C23.4047 2.69295 22.654 2.99325 22.654 2.99325L20.3709 3.61462C19.4148 2.66688 18.123 2.13517 16.7768 2.13525H16.7714Z"
                          fill="#01CDF4"
                        />
                      </svg>
                    </Box>
                    <Box>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0013 0.75C5.78919 0.750129 0.753336 5.78616 0.753418 11.9983C0.753492 14.0409 1.30977 16.045 2.36256 17.7954L1.76048 21.8761C1.60383 22.8759 2.40467 23.3665 3.15122 23.2271L7.71247 22.396C9.07272 22.9572 10.5299 23.2461 12.0013 23.2462C18.2135 23.2463 23.2495 18.2105 23.2497 11.9983C23.2497 5.78601 18.2136 0.749918 12.0013 0.75Z"
                          fill="#59D96B"
                        />
                        <path
                          d="M8.84147 6.20859C8.12807 5.51673 7.12714 6.38626 6.70682 6.85177C5.80062 7.85539 5.45308 9.36404 5.89993 10.8381C6.34677 12.3121 7.43325 13.7957 9.22953 15.4176C11.0258 17.0395 12.6122 17.9694 14.1241 18.264C15.636 18.5585 17.1014 18.0592 18.0076 17.0556C18.4279 16.5901 19.1911 15.5059 18.4303 14.8666C18.3796 14.824 18.322 14.7834 18.2571 14.7451L15.734 13.9421C15.3116 13.7699 14.9504 14.0039 14.6679 14.2617L13.4134 15.4069C12.7052 15.0465 11.8518 14.4634 10.8819 13.5877C9.91196 12.7119 9.2451 11.9222 8.81452 11.2544L9.82606 9.88986C10.0538 9.58263 10.2498 9.19946 10.0355 8.7968L8.97999 6.36844C8.93525 6.30785 8.88903 6.25471 8.84147 6.20859L8.84147 6.20859Z"
                          fill="white"
                        />
                      </svg>
                    </Box>
                    <Box>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66152 4.18857C7.1209 4.16626 5.56681 4.59563 4.21393 5.49959C1.12163 7.5658 -0.0880582 11.5524 1.33517 14.9884C2.7584 18.4244 6.43112 20.3875 10.0787 19.6619C13.7264 18.9364 16.3684 15.717 16.3684 11.9979V11.3021C16.3684 10.9448 16.1307 10.5551 15.7136 10.5551H8.71791C8.24738 10.5551 7.86868 10.9338 7.86868 11.4043V12.5447C7.86868 13.0152 8.24738 13.3939 8.71791 13.3939H13.2801C12.775 15.1161 11.355 16.463 9.51551 16.8289C7.20169 17.2892 4.90617 16.062 4.00336 13.8824C3.10055 11.7029 3.85635 9.21186 5.81792 7.90118C7.55447 6.74085 9.78456 6.8079 11.4308 7.99603C11.7417 8.20116 12.2869 8.26567 12.5971 7.95538L13.5764 6.97541C13.9027 6.58389 13.648 6.05949 13.4156 5.87862C12.2174 4.92714 10.7892 4.37059 9.32033 4.22592C9.10139 4.20436 8.88161 4.19176 8.66152 4.18857Z"
                          fill="#FF005D"
                        />
                        <path
                          d="M20.148 9.12573C19.6775 9.12573 19.2988 9.50444 19.2988 9.97497V10.9201H18.354C17.8835 10.9201 17.5044 11.2989 17.5044 11.7694V12.2301C17.5044 12.7006 17.8835 13.0793 18.354 13.0793H19.2988V14.0245C19.2988 14.495 19.6775 14.8737 20.148 14.8737H20.6087C21.0793 14.8737 21.458 14.495 21.458 14.0245V13.0793H22.4032C22.8737 13.0793 23.2524 12.7006 23.2524 12.2301V11.7694C23.2524 11.2989 22.8737 10.9201 22.4032 10.9201H21.458V9.97497C21.458 9.50444 21.0793 9.12573 20.6087 9.12573H20.148Z"
                          fill="#FF005D"
                        />
                      </svg>
                    </Box>
                    <Box>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5891 15.6594C13.4994 12.2619 17.6954 12.539 17.6954 15.4917V22.1307C17.6954 22.754 18.1971 23.2557 18.8204 23.2557H21.1901C21.8133 23.2557 22.3151 22.754 22.3151 22.1307V13.0312C22.3151 7.6564 12.4907 7.0087 12.5392 11.2727L12.5891 15.6594ZM2.81249 7.35547C2.18925 7.35547 1.6875 7.85722 1.6875 8.48046V22.1307C1.6875 22.754 2.18925 23.2557 2.81249 23.2557H5.18222C5.80546 23.2557 6.30721 22.754 6.30721 22.1307V8.48046C6.30721 7.85722 5.80546 7.35547 5.18222 7.35547H2.81249Z"
                          fill="#00A1FF"
                        />
                        <path
                          d="M9.70918 7.3554C9.08594 7.3554 8.58419 7.85715 8.58419 8.48039V22.1307C8.58419 22.7539 9.08594 23.2556 9.70918 23.2556H12.0789C12.7021 23.2556 13.2039 22.7539 13.2039 22.1307V8.48039C13.2039 7.85715 12.7021 7.3554 12.0789 7.3554H9.70918ZM4.0487 5.46898C3.42292 5.46898 2.82278 5.2204 2.38029 4.7779C1.9378 4.33541 1.68921 3.73527 1.68921 3.10949C1.68921 2.79964 1.75024 2.49282 1.86881 2.20655C1.98739 1.92029 2.16119 1.66018 2.38029 1.44108C2.59939 1.22198 2.8595 1.04818 3.14576 0.929606C3.43203 0.81103 3.73885 0.75 4.0487 0.75C4.35855 0.75 4.66537 0.81103 4.95164 0.929606C5.23791 1.04818 5.49801 1.22198 5.71711 1.44108C5.93621 1.66018 6.11001 1.92029 6.22859 2.20655C6.34716 2.49282 6.40819 2.79964 6.40819 3.10949C6.40819 3.73527 6.1596 4.33541 5.71711 4.7779C5.27462 5.2204 4.67448 5.46898 4.0487 5.46898Z"
                          fill="#00A1FF"
                        />
                      </svg>
                    </Box>
                  </HStack>
                </Box>
              </Flex>
            </Center>
            <Flex my="5rem" m="0 auto" w="100%" maxW="400px">
              <Box flex="1">
                <Text
                  fontStyle="normal"
                  color="white"
                  fontWeight="400"
                  lineHeight="24px"
                  p="1em"
                >
                  All rights reserved
                </Text>
              </Box>
              <Box flex="1">
                <Text
                  fontStyle="normal"
                  color="white"
                  fontWeight="400"
                  lineHeight="24px"
                  p="1em"
                  float={{
                    xsml: "right",
                    sm: "right",
                    md: "right",
                    lg: "none",
                    xl: "none",
                  }}
                >
                  Copyrights 2022
                </Text>
              </Box>
            </Flex>
            <Center>
              <Box
                bgColor="#F11623"
                position="relative"
                top="104px"
                filter="auto"
                blur="116px"
                w="150px"
                h="150px"
                borderBottomLeftRadius="0"
                borderBottomRightRadius="100%"
                borderTopLeftRadius="0"
                borderTopRightRadius="0"
              ></Box>
            </Center>
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default FrontPage;
