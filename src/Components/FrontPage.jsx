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
                  <Box>
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
              What We Teach
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
            my={{
              xsml: "7rem",
              sm: "7rem",
              md: "13rem",
              lg: "11rem",
              xl: "11rem",
            }}
            flexDirection={{
              xsml: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box flex="1" position="relative">
              <Box
                borderRadius="50%"
                bgColor="#727272"
                filter="auto"
                blur="225px"
                position="relative"
                h="200px"
                zIndex="10"
              ></Box>
              <Box
                position="absolute"
                top={{
                  xsml: "0px",
                  sm: "0px",
                  md: "-194px",
                  lg: "0px",
                  xl: "0px",
                }}
                zIndex="20"
              >
                <Image src={ProductDesignImage} />
              </Box>
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
                  Product Design
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
            my={{
              xsml: "0rem",
              sm: "9.7rem",
              md: "25.7rem",
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
            <Box flex="1" position="relative">
              <Box
                borderRadius="50%"
                boxShadow="xs"
                bgColor="#EA00B78C"
                filter="auto"
                blur="241px"
                position="relative"
                h="230px"
                zIndex="10"
              ></Box>
              <Box
                position="absolute"
                top={{
                  xsml: "-30px",
                  sm: "-30px",
                  md: "-364px",
                  lg: "-30px",
                  xl: "-30px",
                }}
                zIndex="50"
              >
                <Image margin="0 auto" src={FrontEndDesignImage}></Image>
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
            my={{
              xsml: "9rem",
              sm: "9rem",
              md: "30rem",
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
            <Box flex="1" position="relative">
              <Box
                borderRadius="50%"
                bgColor="#166DF1"
                filter="auto"
                blur="241px"
                position="relative"
                h="200px"
                zIndex="10"
              ></Box>
              <Center
                position="absolute"
                top={{
                  xsml: "-73px",
                  sm: "-73px",
                  md: "-387px",
                  lg: "-73px",
                  xl: "-73px",
                }}
                zIndex="50"
              >
                <Image w="80%" src={JavaImage} />
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
            my={{
              xsml: "9.7rem",
              sm: "9.7rem",
              md: "17rem",
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
                  Register
                </Button>
              </Box>
            </Box>
            <Box flex="1" position="relative">
              <Box
                borderRadius="50%"
                bgColor="#6700EAA8"
                filter="auto"
                blur="241px"
                position="relative"
                h="200px"
                zIndex="10"
              ></Box>
              <Box
                position="absolute"
                top={{
                  xsml: "0px",
                  sm: "0px",
                  md: "-244px",
                  lg: "0px",
                  xl: "0px",
                }}
                zIndex="50"
              >
                <Image margin="0 auto" src={PythonImage}></Image>
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
                        width="23"
                        height="20"
                        viewBox="0 0 23 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.7714 0.135254C12.954 0.138237 10.6717 2.42296 10.6717 5.24031C10.6718 5.59694 10.7094 5.95258 10.7836 6.3014C10.0473 6.29064 8.08207 6.14769 5.58743 4.99632C2.43263 3.54026 1.73451 2.14483 1.73451 2.14483C1.73451 2.14483 0.750346 0.775 0.278603 3.66174C-0.108483 6.0304 2.40213 8.24194 2.40213 8.24194C2.40213 8.24194 5.31387 11.2152 9.13603 11.2456C10.8918 11.2595 10.0411 12.7902 8.83305 13.8236C4.00985 17.9491 3.35395 17.2636 1.92823 17.1423C1.18395 17.0789 0.567547 17.8862 2.02944 18.7302C5.22356 20.5744 12.8068 20.6494 17.0537 15.2802C20.6479 10.7361 20.9755 6.63674 20.9562 5.34554C21.43 5.0838 21.8542 4.75638 22.0495 4.35885C22.6251 3.18679 21.8289 3.32591 21.8289 3.32591L20.9274 3.3782C21.4554 2.97715 21.9489 2.48589 22.083 1.95849C22.4047 0.692949 21.654 0.993246 21.654 0.993246L19.3709 1.61462C18.4148 0.666876 17.123 0.135174 15.7768 0.135254H15.7714Z"
                          fill="#01CDF4"
                        />
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
                          fill="#59D96B"
                          d="M 25 2 C 12.3 2 2 12.3 2 25 C 2 29.1 3.1 32.899219 5 36.199219 L 2 46.699219 C 1.9 46.999219 1.9992187 47.399219 2.1992188 47.699219 C 2.4992187 47.999219 2.8992187 48 3.1992188 48 L 14.199219 45.300781 C 17.399219 47.000781 21.1 48 25 48 C 37.7 48 48 37.7 48 25 C 48 12.3 37.7 2 25 2 z M 25 4 C 36.6 4 46 13.4 46 25 C 46 36.6 36.6 46 25 46 C 21.3 46 17.800781 45.000781 14.800781 43.300781 C 14.600781 43.200781 14.299609 43.099219 14.099609 43.199219 L 4.5 45.599609 L 7 36.400391 C 7.1 36.100391 7.0003906 35.899609 6.9003906 35.599609 C 5.1003906 32.499609 4 28.9 4 25 C 4 13.4 13.4 4 25 4 z M 18.113281 12.988281 C 17.925781 12.975781 17.800781 13 17.800781 13 L 16.599609 13 C 15.999609 13 15.100781 13.2 14.300781 14 C 13.800781 14.5 12 16.3 12 19.5 C 12 22.9 14.299609 25.799609 14.599609 26.099609 C 14.599609 26.099609 15 26.600781 15.5 27.300781 C 16 28.000781 16.699609 28.800781 17.599609 29.800781 C 19.399609 31.700781 21.899609 33.899219 25.099609 35.199219 C 26.499609 35.799219 27.699609 36.2 28.599609 36.5 C 30.199609 37 31.700781 36.900781 32.800781 36.800781 C 33.600781 36.700781 34.500391 36.299219 35.400391 35.699219 C 36.300391 35.099219 37.199609 34.400391 37.599609 33.400391 C 37.899609 32.600391 37.999609 31.900781 38.099609 31.300781 L 38.099609 30.5 C 38.099609 30.2 38.000781 30.200781 37.800781 29.800781 C 37.300781 29.000781 36.799219 29.000781 36.199219 28.800781 C 35.899219 28.600781 34.999219 28.200781 34.199219 27.800781 C 33.299219 27.400781 32.599609 27.000781 32.099609 26.800781 C 31.799609 26.700781 31.400391 26.499609 30.900391 26.599609 C 30.400391 26.699609 29.899609 27 29.599609 27.5 C 29.299609 27.9 28.200781 29.299219 27.800781 29.699219 L 27.699219 29.599609 C 27.299219 29.399609 26.7 29.200781 26 28.800781 C 25.2 28.400781 24.299219 27.800781 23.199219 26.800781 C 21.599219 25.400781 20.499219 23.699609 20.199219 23.099609 C 20.499219 22.699609 20.899609 22.3 21.099609 22 C 21.199609 21.9 21.280859 21.799219 21.349609 21.699219 C 21.418359 21.599219 21.475391 21.500391 21.525391 21.400391 C 21.625391 21.200391 21.700781 21.000781 21.800781 20.800781 C 22.200781 20.100781 22.000781 19.300391 21.800781 18.900391 C 21.800781 18.900391 21.7 18.600781 21.5 18.300781 C 21.4 18.000781 21.2 17.499609 21 17.099609 C 20.6 16.199609 20.2 15.199609 20 14.599609 C 19.7 13.899609 19.300781 13.399219 18.800781 13.199219 C 18.550781 13.049219 18.300781 13.000781 18.113281 12.988281 z M 16.599609 15 L 17.699219 15 L 17.900391 15 C 17.900391 15 17.999609 15.100391 18.099609 15.400391 C 18.299609 16.000391 18.799609 17.000391 19.099609 17.900391 C 19.299609 18.300391 19.499609 18.799609 19.599609 19.099609 C 19.699609 19.399609 19.800391 19.600781 19.900391 19.800781 C 19.900391 19.900781 20 19.900391 20 19.900391 C 19.8 20.300391 19.8 20.399219 19.5 20.699219 C 19.2 21.099219 18.799219 21.499219 18.699219 21.699219 C 18.599219 21.899219 18.299609 22.1 18.099609 22.5 C 17.899609 22.9 18.000781 23.599609 18.300781 24.099609 C 18.700781 24.699609 19.900781 26.700391 21.800781 28.400391 C 23.000781 29.500391 24.1 30.199609 25 30.599609 C 25.9 31.099609 26.600781 31.300391 26.800781 31.400391 C 27.200781 31.600391 27.599609 31.699219 28.099609 31.699219 C 28.599609 31.699219 29.000781 31.3 29.300781 31 C 29.700781 30.6 30.699219 29.399609 31.199219 28.599609 L 31.400391 28.699219 C 31.400391 28.699219 31.699609 28.8 32.099609 29 C 32.499609 29.2 32.900391 29.399609 33.400391 29.599609 C 34.300391 29.999609 35.100391 30.399609 35.400391 30.599609 L 36 30.900391 L 36 31.199219 C 36 31.599219 35.899219 32.200781 35.699219 32.800781 C 35.599219 33.100781 35.000391 33.699609 34.400391 34.099609 C 33.700391 34.499609 32.899609 34.800391 32.599609 34.900391 C 31.699609 35.000391 30.600781 35.099219 29.300781 34.699219 C 28.500781 34.399219 27.4 34.1 26 33.5 C 23.2 32.3 20.899219 30.3 19.199219 28.5 C 18.399219 27.6 17.699219 26.799219 17.199219 26.199219 C 16.699219 25.599219 16.500781 25.2 16.300781 25 C 15.900781 24.6 14 21.999609 14 19.599609 C 14 17.099609 15.200781 16.100391 15.800781 15.400391 C 16.100781 15.000391 16.499609 15 16.599609 15 z"
                        ></path>
                      </svg>
                    </Box>
                    <Box>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66152 0.18857C7.1209 0.16626 5.56681 0.595626 4.21393 1.49959C1.12163 3.5658 -0.0880582 7.55241 1.33517 10.9884C2.7584 14.4244 6.43112 16.3875 10.0787 15.6619C13.7264 14.9364 16.3684 11.717 16.3684 7.99794V7.30215C16.3684 6.94475 16.1307 6.55509 15.7136 6.55509H8.71791C8.24738 6.55509 7.86868 6.93379 7.86868 7.40432V8.54469C7.86868 9.01522 8.24738 9.39392 8.71791 9.39392H13.2801C12.775 11.1161 11.355 12.463 9.51551 12.8289C7.20169 13.2892 4.90617 12.062 4.00336 9.88245C3.10055 7.70287 3.85635 5.21186 5.81792 3.90118C7.55447 2.74085 9.78456 2.8079 11.4308 3.99603C11.7417 4.20116 12.2869 4.26567 12.5971 3.95538L13.5764 2.97541C13.9027 2.58389 13.648 2.05949 13.4156 1.87862C12.2174 0.927142 10.7892 0.370592 9.32033 0.225924C9.10139 0.204361 8.88161 0.191758 8.66152 0.18857Z"
                          fill="#FF005D"
                        />
                      </svg>
                    </Box>
                    <Box>
                      <svg
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5891 8.65938C12.4994 5.26191 16.6954 5.53901 16.6954 8.4917V15.1307C16.6954 15.754 17.1971 16.2557 17.8204 16.2557H20.1901C20.8133 16.2557 21.3151 15.754 21.3151 15.1307V6.0312C21.3151 0.656401 11.4907 0.00870341 11.5392 4.27271L11.5891 8.65938ZM1.81249 0.355469C1.18925 0.355469 0.6875 0.857217 0.6875 1.48046V15.1307C0.6875 15.754 1.18925 16.2557 1.81249 16.2557H4.18222C4.80546 16.2557 5.30721 15.754 5.30721 15.1307V1.48046C5.30721 0.857217 4.80546 0.355469 4.18222 0.355469H1.81249Z"
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
                  float = {{
                    xsml: "right",
                    sm: "right",
                    md: "right",
                    lg: "none",
                    xl: "none"
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
