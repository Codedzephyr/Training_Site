import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import NavbarHeaderImage from "../image/Group 20.svg";
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
});

const FrontPage = () => {
  const [isDisplayNavigationBar, setNavigationBarDisplay] = useState(false);

  const handleclickShow = () => {
    setNavigationBarDisplay(!isDisplayNavigationBar);
  };
  return (
    <ChakraProvider theme={theme}>
      <Center
        w="100%"
        bgColor="black"
        bgPosition="0% 0%, 99% 101%"
        bgImage="url(/static/media/Group_17.32ff4d36090d754448f925e529578336.svg), url(/static/media/Ellipse_9.77a36cb639721d4e08044c5b384ac115.svg)"
        bgSize="600px,272px"
        bgRepeat="no-repeat no-repeat"
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
                  <Box>
                    <Image
                      my="1.5rem"
                      display="inline-block"
                      src={NavbarHeaderImage}
                    />
                  </Box>
                  <Box flex="1">
                    <Text
                      fontSize="1.4rem"
                      fontWeight="600"
                      color="white"
                      my="2.5rem"
                    >
                      Codeinn
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
              <Text color="white" fontSize="clamp(0.8rem,5vw,1.3rem)">
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
              <Image margin="0 auto" src={LearnImage}></Image>
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
            >
              What We Touch
            </Text>
            <Text
              color="white"
              fontSize="clamp(2.8rem,5vw,2.5rem)"
              textAlign="center"
              fontWeight="600"
            >
              What We offer
            </Text>
          </Box>
          <Flex
            my="6rem"
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
                  fontSize="clamp(1.5rem,10vw,2.5rem)"
                  fontWeight="600"
                >
                  FrontEnd Web Development
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
                    Register
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
          <Flex
            my="6.7rem"
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
                  Register
                </Button>
              </Box>
            </Box>
            <Box flex="1">
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
                fontSize="clamp(1.5rem,10vw,2.5rem)"
                fontWeight="600"
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
              >
                FrontEnd Web Development
              </Text>
              <Text
                color="white"
                fontSize="clamp(0.9rem,10vw,1.1rem)"
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
                  Register
                </Button>
              </Box>
            </Box>
          </Flex>
          <Flex
            my="6rem"
            flexDirection={{
              xsml: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box flex="1">
              <Image src={JavaImage} />
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
                  fontSize="clamp(1.5rem,10vw,2.5rem)"
                  fontWeight="600"
                >
                  JAVA
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
                    Register
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
          <Flex
            my="6.7rem"
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
                  Register
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
                fontSize="clamp(1.5rem,10vw,2.5rem)"
                fontWeight="600"
                textAlign={{
                  xsml: "center",
                  sm: "center",
                  md: "center",
                  lg: "initial",
                  xl: "initial",
                }}
              >
                Python and Machine Learning
              </Text>
              <Text
                color="white"
                fontSize="clamp(0.9rem,10vw,1.1rem)"
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
                  Register
                </Button>
              </Box>
            </Box>
          </Flex>
          <Box my="2rem">
            <Text
              color="white"
              fontSize="clamp(1.2rem,5vw,1.2rem)"
              textAlign="center"
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
                  borderRadius="24px"
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
            <Flex w="60%" maxW="230px">
              <Box flex="1">
                <Image src={NavbarHeaderImage} />
              </Box>
              <Box flex="1">
                <Text fontSize="1.4rem" fontWeight="600" color="white">
                  Codeinn
                </Text>
                <HStack spacing="5px">
                  <Box>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0e76a8"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#000000"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      ></path>
                    </svg>
                  </Box>
                  <Box>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fill="#4cbb17"
                        d="M 25 2 C 12.3 2 2 12.3 2 25 C 2 29.1 3.1 32.899219 5 36.199219 L 2 46.699219 C 1.9 46.999219 1.9992187 47.399219 2.1992188 47.699219 C 2.4992187 47.999219 2.8992187 48 3.1992188 48 L 14.199219 45.300781 C 17.399219 47.000781 21.1 48 25 48 C 37.7 48 48 37.7 48 25 C 48 12.3 37.7 2 25 2 z M 25 4 C 36.6 4 46 13.4 46 25 C 46 36.6 36.6 46 25 46 C 21.3 46 17.800781 45.000781 14.800781 43.300781 C 14.600781 43.200781 14.299609 43.099219 14.099609 43.199219 L 4.5 45.599609 L 7 36.400391 C 7.1 36.100391 7.0003906 35.899609 6.9003906 35.599609 C 5.1003906 32.499609 4 28.9 4 25 C 4 13.4 13.4 4 25 4 z M 18.113281 12.988281 C 17.925781 12.975781 17.800781 13 17.800781 13 L 16.599609 13 C 15.999609 13 15.100781 13.2 14.300781 14 C 13.800781 14.5 12 16.3 12 19.5 C 12 22.9 14.299609 25.799609 14.599609 26.099609 C 14.599609 26.099609 15 26.600781 15.5 27.300781 C 16 28.000781 16.699609 28.800781 17.599609 29.800781 C 19.399609 31.700781 21.899609 33.899219 25.099609 35.199219 C 26.499609 35.799219 27.699609 36.2 28.599609 36.5 C 30.199609 37 31.700781 36.900781 32.800781 36.800781 C 33.600781 36.700781 34.500391 36.299219 35.400391 35.699219 C 36.300391 35.099219 37.199609 34.400391 37.599609 33.400391 C 37.899609 32.600391 37.999609 31.900781 38.099609 31.300781 L 38.099609 30.5 C 38.099609 30.2 38.000781 30.200781 37.800781 29.800781 C 37.300781 29.000781 36.799219 29.000781 36.199219 28.800781 C 35.899219 28.600781 34.999219 28.200781 34.199219 27.800781 C 33.299219 27.400781 32.599609 27.000781 32.099609 26.800781 C 31.799609 26.700781 31.400391 26.499609 30.900391 26.599609 C 30.400391 26.699609 29.899609 27 29.599609 27.5 C 29.299609 27.9 28.200781 29.299219 27.800781 29.699219 L 27.699219 29.599609 C 27.299219 29.399609 26.7 29.200781 26 28.800781 C 25.2 28.400781 24.299219 27.800781 23.199219 26.800781 C 21.599219 25.400781 20.499219 23.699609 20.199219 23.099609 C 20.499219 22.699609 20.899609 22.3 21.099609 22 C 21.199609 21.9 21.280859 21.799219 21.349609 21.699219 C 21.418359 21.599219 21.475391 21.500391 21.525391 21.400391 C 21.625391 21.200391 21.700781 21.000781 21.800781 20.800781 C 22.200781 20.100781 22.000781 19.300391 21.800781 18.900391 C 21.800781 18.900391 21.7 18.600781 21.5 18.300781 C 21.4 18.000781 21.2 17.499609 21 17.099609 C 20.6 16.199609 20.2 15.199609 20 14.599609 C 19.7 13.899609 19.300781 13.399219 18.800781 13.199219 C 18.550781 13.049219 18.300781 13.000781 18.113281 12.988281 z M 16.599609 15 L 17.699219 15 L 17.900391 15 C 17.900391 15 17.999609 15.100391 18.099609 15.400391 C 18.299609 16.000391 18.799609 17.000391 19.099609 17.900391 C 19.299609 18.300391 19.499609 18.799609 19.599609 19.099609 C 19.699609 19.399609 19.800391 19.600781 19.900391 19.800781 C 19.900391 19.900781 20 19.900391 20 19.900391 C 19.8 20.300391 19.8 20.399219 19.5 20.699219 C 19.2 21.099219 18.799219 21.499219 18.699219 21.699219 C 18.599219 21.899219 18.299609 22.1 18.099609 22.5 C 17.899609 22.9 18.000781 23.599609 18.300781 24.099609 C 18.700781 24.699609 19.900781 26.700391 21.800781 28.400391 C 23.000781 29.500391 24.1 30.199609 25 30.599609 C 25.9 31.099609 26.600781 31.300391 26.800781 31.400391 C 27.200781 31.600391 27.599609 31.699219 28.099609 31.699219 C 28.599609 31.699219 29.000781 31.3 29.300781 31 C 29.700781 30.6 30.699219 29.399609 31.199219 28.599609 L 31.400391 28.699219 C 31.400391 28.699219 31.699609 28.8 32.099609 29 C 32.499609 29.2 32.900391 29.399609 33.400391 29.599609 C 34.300391 29.999609 35.100391 30.399609 35.400391 30.599609 L 36 30.900391 L 36 31.199219 C 36 31.599219 35.899219 32.200781 35.699219 32.800781 C 35.599219 33.100781 35.000391 33.699609 34.400391 34.099609 C 33.700391 34.499609 32.899609 34.800391 32.599609 34.900391 C 31.699609 35.000391 30.600781 35.099219 29.300781 34.699219 C 28.500781 34.399219 27.4 34.1 26 33.5 C 23.2 32.3 20.899219 30.3 19.199219 28.5 C 18.399219 27.6 17.699219 26.799219 17.199219 26.199219 C 16.699219 25.599219 16.500781 25.2 16.300781 25 C 15.900781 24.6 14 21.999609 14 19.599609 C 14 17.099609 15.200781 16.100391 15.800781 15.400391 C 16.100781 15.000391 16.499609 15 16.599609 15 z"
                      ></path>
                    </svg>
                  </Box>
                  <Box>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#03A9F4"
                        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                      ></path>
                    </svg>
                  </Box>
                  <Box>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#6495ed"
                        d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"
                      />
                    </svg>
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default FrontPage;
