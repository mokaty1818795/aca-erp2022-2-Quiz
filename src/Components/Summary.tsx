import {
  HStack,
  Box,
  Stack,
  Button,
  RadioGroup,
  Radio,
  Badge,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { questions } from "../Data/data";
const Summary = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const anotherQuestion = () => {
    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
    }
  };

  const previousQuestion = () => {
    const nextQuetions = currentQuestion - 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
    }
  };

  return (
    <>
      <Container mt="10rem" maxWidth="container.xl">
        <HStack justifyContent="space-between" px="2rem">
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
              Next
            </Button>
          </Stack>
        </HStack>
        <Stack px={8} py="1rem">
          <Box
            fontSize="1.4375rem"
            color="#696F79"
            fontWeight={600}
            lineHeight="2.125rem"
          >
            {currentQuestion + 1} /{questions.length}
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
          <Badge bg="#00A878" px="1rem">
            <Box>Answer {questions[currentQuestion].answer}</Box>
          </Badge>
        </Box>
        <Stack px={8}>
          {questions[currentQuestion].answerOptions.map(
            (answerOptions: { isCorrect: boolean; answerText: string }) => (
              <>
                <RadioGroup>
                  <Radio isDisabled fontStyle="bold" value={answerOptions.answerText}>
                    {answerOptions.answerText}
                  </Radio>
                </RadioGroup>
              </>
            )
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Summary;
