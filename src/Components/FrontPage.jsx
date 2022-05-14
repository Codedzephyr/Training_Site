import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
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
  const [closeButtonDisappear, setCloseButtonDisappear] = useState(false);
  const [hamburgerAppear, setHamburgerDisappear] = useState(true);

  const handleclickShow = () => {
    setNavigationBarDisplay(!isDisplayNavigationBar);
    setCloseButtonDisappear(!closeButtonDisappear);
    setHamburgerDisappear(!hamburgerAppear);
  };

  const handleclickShow1 = () => {
    setNavigationBarDisplay(!closeButtonDisappear);
    setHamburgerDisappear(!hamburgerAppear);
    setCloseButtonDisappear(!closeButtonDisappear);
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
                  {hamburgerAppear ? (
                    <Box
                      my="1.9rem"
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
                        width="40"
                        height="40"
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5C4.4 5 4 5.4 4 6S4.4 7 5 7zM5 13h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1S4.4 13 5 13zM5 19h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1S4.4 19 5 19z"
                        />
                      </svg>
                    </Box>
                  ) : null}

                  <Box flex="1">
                    {closeButtonDisappear ? (
                      <Box
                        my="1.9rem"
                        display={{
                          xsml: "flex",
                          sm: "flex",
                          md: "flex",
                          lg: "none",
                          xl: "none",
                        }}
                        justifyContent="flex-end"
                        cursor="pointer"
                        onClick={handleclickShow1}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#fff"
                            d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"
                          />
                        </svg>
                      </Box>
                    ) : null}
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
                    <Link
                      href="https://app.tryklas.com/course/1a63f18b-976b-40db-ba10-db20efe5645f"
                      target="_blank"
                    >
                      View Details
                    </Link>
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
                  <Link
                    href=" https://app.tryklas.com/course/431dc8a4-4df9-4b71-9149-a0f06a7fc123"
                    target="_blank"
                  >
                    View Details
                  </Link>
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
                  <Link
                    href=" https://app.tryklas.com/course/431dc8a4-4df9-4b71-9149-a0f06a7fc123"
                    target="_blank"
                  >
                    View Details
                  </Link>
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
                    <Link
                      href="http://app.tryklas.com/course/8f4d4dd7-da5d-4872-8857-ca5e37ee7f23"
                      target="_blank"
                    >
                      View Details
                    </Link>
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
                  <Link
                    href="https://app.tryklas.com/course/3735a267-f9f4-4552-b27e-e741798c6f15"
                    target="_blank"
                  >
                    View Details
                  </Link>
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
                  <Link
                    href="https://app.tryklas.com/course/3735a267-f9f4-4552-b27e-e741798c6f15"
                    target="_blank"
                  >
                    View Details
                  </Link>
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
