import React from 'react'
import { Heading, HStack, Text, Img, Box, Stack } from '@chakra-ui/react'
import reactImg from '../Assets/reactImg.jpg'
const QuizHome = () => {
  return (
    <>
      <HStack flex={1} mt="1rem" flexDirection="column">
        <Stack align="flex-start" direction="column">
          <Heading>React Quiz</Heading>
          <Text>Before start read the following instructions</Text>
        </Stack>
        <HStack px="5rem">
          <Img borderRadius="30px" src={reactImg} w="31.4375rem" h="18.5rem" />
          <HStack direction="column">
            <Stack direction="column">
              <HStack>
                <Box>Date</Box>
                <Box>13/07/2022</Box>
              </HStack>
              <HStack>
                <Box>Time Limit</Box>
                <Box>30mins</Box>
              </HStack>
              <HStack>
                <Box>Attempts</Box>
                <Box>1</Box>
              </HStack>

              <HStack>
                <Box>Points</Box>
                <Box>200 points</Box>
              </HStack>
            </Stack>
          </HStack>
        </HStack>
      </HStack>
    </>
  )
}

export default QuizHome
