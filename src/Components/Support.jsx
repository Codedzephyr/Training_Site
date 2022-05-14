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
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      data-name="Layer 1"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#ea4435"
                        d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
                      />
                      <path
                        fill="#00ac47"
                        d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
                        transform="rotate(180 26.5 16)"
                      />
                      <path
                        fill="#ffba00"
                        d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
                      />
                      <path
                        fill="#4285f4"
                        d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
                      />
                      <path
                        fill="#c52528"
                        d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
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
