import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import NavbarHeaderImage from "../image/Group_20.svg";
import { Image } from "@chakra-ui/react";

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

const Support = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box id="support">
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
                  <Link href="https://twitter.com/Course_wind" target="_blank">
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
                  </Link>
                </Box>
                <Box>
                  <Link href="mailto:codeinntut@gmail.com" target="_blank">
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
                  </Link>
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
    </ChakraProvider>
  );
};

export default Support;
