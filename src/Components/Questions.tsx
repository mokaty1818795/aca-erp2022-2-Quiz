import {
  Heading,
  HStack,
  Box,
  Stack,
  Flex,
  Button,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { questions } from "./data";
import Summary from "./Summary";

const ExamDetails = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [feeback, setFeedback] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [finish, setFinish] = useState("Next");

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 20);
    }
  };

  const anotherQuestion = () => {
    const nextQuetions = currentQuestion + 1;
    if (nextQuetions === questions.length) {
      setFinish("Submit");
    }
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
      if (score < 500) {
        setFeedback("Sorry Exam Failed");
      } else {
        setFeedback(" Congrats You Have Passed Your Quiz");
      }
    }
  };

  const previousQuestion = () => {
    const previous = currentQuestion - 1;

    if (previous < questions.length) {
      setCurrentQuestion(previous);
    } else {
      setShowScore(true);
      if (score < 500) {
        setFeedback("Sorry Exam Failed");
      } else {
        setFeedback(" Congrats You Have Passed Your Quiz");
      }
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
            You Scored {score}/1000 Points
          </Box>
          <Box
            fontSize="1.4375rem"
            color="#696F79"
            fontWeight={600}
            lineHeight="2.125rem"
            textAlign="center"
          >
            {feeback}
          </Box>
          <Summary />
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
          <Stack px={8} justifyContent="center">
            {questions[currentQuestion].answerOptions.map(
              (answerOptions: { isCorrect: boolean; answerText: string }) => (
                <RadioGroup>
                  <Radio
                    value={answerOptions.answerText}
                    onClick={() =>
                      handleAnswerButtonClick(answerOptions.isCorrect)
                    }
                  >
                    {answerOptions.answerText}
                  </Radio>
                </RadioGroup>
              )
            )}
          </Stack>
          <HStack py="2rem" px="2rem">
            <Stack>
              <Button
                disabled={disableBtn}
                onClick={() => {
                  if (currentQuestion === 1) {
                    setDisableBtn(true);
                  }
                  previousQuestion();
                }}
              >
                Previous
              </Button>
            </Stack>

            <Stack>
              <Button
                onClick={() => {
                  anotherQuestion();
                }}
              >
                {finish}
              </Button>
            </Stack>
          </HStack>
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
