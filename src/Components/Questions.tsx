import {
  Heading,
  HStack,
  Box,
  Stack,
  Flex,
  Button,
  Radio,
  RadioGroup,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { questions } from "../Data/data";
import { useNavigate } from "react-router-dom";

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
    if (nextQuetions === 49) {
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
    }
  };

  const navigate = useNavigate();

  const navigaetToSummary = () => {
    navigate("/summary");
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
            py="1rem"
            fontSize="1.4375rem"
            color="#696F79"
            fontWeight={600}
            lineHeight="2.125rem"
            textAlign="center"
          >
            {feeback}
          </Box>
          <Button py="1rem" onClick={navigaetToSummary}>
            Summary
          </Button>
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
        mt="10rem"
        ml="20rem"
        zIndex="modal"
        boxShadow="lg"
        w="90rem"
        flexDirection="column"
        borderRadius="1.875rem"
      >
        <Center>
          <Stack>
            <Heading color="#696F79">Git Quiz</Heading>
          </Stack>
        </Center>
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
