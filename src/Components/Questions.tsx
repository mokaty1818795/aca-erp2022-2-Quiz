import {
  Heading,
  HStack,
  Box,
  Stack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import {questions} from "./data";
const ExamDetails = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 20);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      {showScore ? (
        <Stack px="35rem">
          <Box
            fontSize="1.4375rem"
            color="#696F79"
            fontWeight={600}
            lineHeight="2.125rem"
            textAlign="center"
          >
            You Scored {score} Points
          </Box>
        </Stack>
      ) : (
        <>
          <Stack px={8}>
            <Box
              fontSize="1.4375rem"
              color="#696F79"
              fontWeight={600}
              lineHeight="2.125rem"
            >
              Question {currentQuestion + 1} /{questions.length}
            </Box>
          </Stack>
          <Box
            fontSize="1.4375rem"
            color="#696F79"
            fontWeight={600}
            lineHeight="2.125rem"
            px={8}
            py="2rem"
          >
            {questions[currentQuestion].questionText}
          </Box>
          <Stack px={8}>
            {questions[currentQuestion].answerOptions.map((answerOptions: { isCorrect: boolean; answerText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
              <Button
                px="2rem"
                py="2rem"
                onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </Button>
            ))}
          </Stack>
        </>
      )}
    </>
  );
};

const Questions = () => {
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
        <HStack py="1.5rem" px="1rem" justifyContent="space-between">
          <Stack>
            <Heading color="#696F79">React Quiz</Heading>
          </Stack>
          <HStack>
            <Heading color="#696F79">Time:</Heading>
            <Heading color="#696F79">29:00mins</Heading>
          </HStack>
        </HStack>
        <HStack spacing={20} alignItems="center">
          <HStack direction="column" spacing={20}>
            <Stack direction="column" py="2rem">
              <ExamDetails />
            </Stack>
          </HStack>
        </HStack>
      </Flex>
    </>
  );
};

export default Questions;
