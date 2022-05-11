import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavbarHeaderImage from "../image/Group_20.svg";
import LearnImage from "../image/undraw_font_re_efri.svg";
import ProductDesignImage from "../image/undraw_design_tools_-42-tf.svg";
import FrontEndDesignImage from "../image/undraw_programming_re_kg9v.svg";
import JavaImage from "../image/undraw_developer_activity_re_39tg.svg";
import PythonImage from "../image/undraw_artificial_intelligence_re_enpp.svg";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Support from "./Support";

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
      <Center w="100%" bgColor="black">
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
                  href="#support"
                  as="a"
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
                    href="#support"
                    as="a"
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
                  This track is targeted at teaching total beginners and persons
                  with past rudimentary experience of UI/UX design, how to
                  create aesthetically appealing and easy-to-use interfaces.
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
                Do you realize that the only functionality of a web application
                that the user directly interacts with is through the web page?
                Implement it poorly and, to the user, the server-side becomes
                irrelevant. Get started as a front-end web developer using
                HTML,CSS and JavaScript.
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
                Do you realize that the only functionality of a web application
                that the user directly interacts with is through the web page?
                Implement it poorly and, to the user, the server-side becomes
                irrelevant. Get started as a front-end web developer using
                HTML,CSS and JavaScript.
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
                  Backend Development With Java(Spring)
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
                  A Simple and Systsematic approachh to learning java and spring
                  with the intention of developing backend applications.
                </Text>
                <Box
                  id="section"
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
                Machine Learning With Python
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
                This Track is focused on calibrating an absolute beginner or one
                with pre-existing knowledge on the right path to kickstart their
                career as a data scientist/ data analyst with generally accepted
                tools,techniques and methodologies.
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
                Machine Learning with Python.
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
                This Track is focused on calibrating an absolute beginner or one
                with pre-existing knowledge on the right path to kickstart their
                career as a data scientist/ data analyst with generally accepted
                tools,techniques and methodologies.
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
          <Support id="support" />
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default FrontPage;
