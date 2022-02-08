import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import backgroundImage from "../image/Group_17.svg";
import NavbarHeaderImage from "../image/Group 20.svg";
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
        w="100%"
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
                <Box flex="1"></Box>
              </Flex>
            </Box>
            <Box flex="1">
              <UnorderedList
                display="flex"
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
                  color="white"
                  bgColor="blue"
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
                  color="white"
                  bgColor="blue"
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
                  color="white"
                  bgColor="blue"
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
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default FrontPage;
