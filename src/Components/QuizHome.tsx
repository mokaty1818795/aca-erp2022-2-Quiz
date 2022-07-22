import React from "react";
import {
  Heading,
  HStack,
  Img,
  Box,
  Stack,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import gitimage from "../Assets/gitimage.png";

const QuizHome = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/questions");
  };

  return (
    <>
      <Flex
        mt="20rem"
        ml="20rem"
        zIndex="modal"
        boxShadow="lg"
        w="90rem"
        flexDirection="column"
        borderRadius="1.875rem"
      >
        <Center>
          <HStack spacing={20} alignItems="center">
            <Heading color="#696F79">Git Quiz</Heading>
            <Stack px="1rem">
              <Img
                borderRadius="30px"
                src={gitimage}
                w="31.4375rem"
                h="18.5rem"
              />
            </Stack>
          </HStack>

          <Stack py="2rem" px="2rem">
            <Heading color="#696F79">Instructions</Heading>
            <Box>
              <Button
                bg="#8692A6"
                px="4rem"
                py="1.5rem"
                onClick={navigateToContacts}
              >
                Start Quiz
              </Button>
            </Box>
          </Stack>
        </Center>
      </Flex>
    </>
  );
};

export default QuizHome;
