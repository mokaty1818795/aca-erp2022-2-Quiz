import React from 'react'
import {
  Heading,
  HStack,
  Text,
  Img,
  Box,
  Stack,
  Flex,
  Button,
} from '@chakra-ui/react'
import reactImg from '../Assets/reactImg.jpg'
import data from '../Data/ExamDetails.json'
const ExamDetails = () => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <>
            <HStack>
              <Box
                fontSize="1.4375rem"
                color="#696F79"
                fontWeight={600}
                lineHeight="2.125rem"
              >
                Date
              </Box>
              <Box px="1rem">{item.Date}</Box>
            </HStack>
            <HStack>
              <Box
                fontSize="1.4375rem"
                color="#696F79"
                fontWeight={600}
                lineHeight="2.125rem"
              >
                Time Limit
              </Box>
              <Box px="1rem">{item.timelimit}</Box>
            </HStack>
            <HStack>
              <Box
                fontSize="1.4375rem"
                color="#696F79"
                fontWeight={600}
                lineHeight="2.125rem"
              >
                Attempts
              </Box>
              <Box px="1rem">{item.attempts}</Box>
            </HStack>
            <HStack>
              <Box
                fontSize="1.4375rem"
                color="#696F79"
                fontWeight={600}
                lineHeight="2.125rem"
              >
                Points
              </Box>
              <Box px="1rem">{item.Points}</Box>
            </HStack>
          </>
        )
      })}
    </>
  )
}

const QuizHome = () => {
  return (
    <>
      <Flex
        ml="20rem"
        zIndex="modal"
        boxShadow="lg"
        w="90rem"
        flexDirection="column"
        borderRadius="1.875rem"
      >
        <Stack py="1.5rem" px="1rem">
          <Heading color="#696F79">React Quiz</Heading>
          <Text>Before start read the following instructions</Text>
        </Stack>
        <HStack spacing={20} alignItems="center">
          <Stack px="1rem">
            <Img
              borderRadius="30px"
              src={reactImg}
              w="31.4375rem"
              h="18.5rem"
            />
          </Stack>
          <HStack direction="column" spacing={20}>
            <Stack direction="column" py="2rem">
              <ExamDetails />
            </Stack>
          </HStack>
        </HStack>
        <Stack py="2rem" px="2rem">
          <Heading color="#696F79">Instructions</Heading>
          <Text>
            This quiz consists of 4 multiple-choice questions. To be successful
            with the quizzes, its important to conversant with the topics. Keep
            the following in mind: Timing - You need to complete each of your
            attempts in one sitting, as you are allotted 30 minutes to each
            attempt. Answers - You may review your answer-choices and compare
            them to the correct answers after your final attempt. To start,
            click the "Start" button. When finished, click the "Submit " button.
          </Text>
        </Stack>
        <HStack justifyContent="flex-start" px="2rem" mb="1rem" w="2rem">
          <Button
            bg="#8692A6"
            color="#fff"
            px="4rem"
            py="1.5rem"
            borderRadius="1.875rem"
            fontSize="1.25rem"
          >
            Start Quiz
          </Button>
        </HStack>
      </Flex>
    </>
  );
}

export default QuizHome
