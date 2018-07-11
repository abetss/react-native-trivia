import React from 'react';
import {
  Container,
  Text,
  Button,
  Header,
  ScrollBox,
  Box,
} from 'src/core/components';
import { NavigationScreenProps } from 'react-navigation';

import { TriviaSummaryConnector, QuestionResult } from './store';

import { QUIZ_TOTAL_QUESTIONS } from '../../store';
import { QuestionAnswerComponent } from './components';
import { getThemeSpacing } from '../../../../design-system';

export interface TriviaSummaryProps
  extends NavigationScreenProps,
    TriviaSummaryConnector {
  handleRetryClick: () => void;
  resetQuiz: () => void;
  fetchQuestions: () => void;
}

const renderQuestionAnswer = (
  questionTitleAnswer: QuestionResult,
  index: number,
) => (
  <QuestionAnswerComponent
    questionTitle={questionTitleAnswer.questionTitle}
    answer={questionTitleAnswer.answer}
    answeredCorrectly={questionTitleAnswer.answeredCorrectly}
    key={`question-answer-${index}`}
  />
);

export const TriviaSummaryComponent: React.SFC<TriviaSummaryProps> = ({
  handleRetryClick,
  numberOfCorrectAnswers,
  questionResults,
}) => (
  <Container>
    <Header>
      <Text fontSize={4} fontWeight={6} textAlign="center" color="white.0">
        You Scored
      </Text>
      <Text fontSize={5} fontWeight={6} textAlign="center" color="white.0">
        {numberOfCorrectAnswers} of {QUIZ_TOTAL_QUESTIONS}
      </Text>
    </Header>
    <ScrollBox
      flex={1}
      flexDirection="column"
      pt={3}
      pb={8}
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: getThemeSpacing(4),
      }}
    >
      {questionResults.map(renderQuestionAnswer)}
      <Box my={3}>
        <Button title="PLAY AGAIN?" onPress={handleRetryClick} w={150} />
      </Box>
    </ScrollBox>
  </Container>
);
