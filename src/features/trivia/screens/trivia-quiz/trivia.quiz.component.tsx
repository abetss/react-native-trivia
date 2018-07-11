import React from 'react';
import { NavigationScreenProps } from 'react-navigation';

import {
  Container,
  Text,
  Header,
  Card,
  Box,
  Button,
} from 'src/core/components';
import { getThemeFontSize } from 'src/design-system';

import { TriviaQuizConnector } from './store';
import { QUIZ_TOTAL_QUESTIONS } from '../../store';

export interface TriviaQuizProps
  extends NavigationScreenProps,
    TriviaQuizConnector {
  answerQuestion: (answer: boolean) => void;
  handleAnswerClick: (answer: boolean) => () => void;
  handleInCorrectClick: () => void;
}

export const TriviaQuizComponent: React.SFC<TriviaQuizProps> = ({
  isLoading,
  currentQuestionCategory,
  currentQuestionQuestion,
  currentQuestionNumber,
  handleAnswerClick,
}) => (
  <Container>
    {isLoading && (
      <Text>Is Loading</Text>
    ) /* Todo: switch this with a proper loading */}
    {!isLoading && (
      <React.Fragment>
        <Header>
          <Text
            fontSize={4}
            fontWeight="bold"
            textAlign="center"
            color="white.0"
          >
            {currentQuestionCategory}
          </Text>
        </Header>
        <Box px={2} flex={1} alignItems="center" pt={5}>
          <Card height={260} width={320}>
            <Text textAlign="center">{currentQuestionQuestion}</Text>
          </Card>
          <Box pt={3}>
            <Text>
              {currentQuestionNumber} of {QUIZ_TOTAL_QUESTIONS}
            </Text>
          </Box>
          <Box flexDirection="row" pt={5}>
            <Button
              title="In Correct"
              onPress={handleAnswerClick(false)}
              icon={{ name: 'close', size: getThemeFontSize(4) }}
              bg="orange.0"
              w={150}
            />
            <Button
              title="Correct"
              onPress={handleAnswerClick(true)}
              icon={{ name: 'check', size: getThemeFontSize(4) }}
              bg="green.0"
              w={150}
            />
          </Box>
        </Box>
      </React.Fragment>
    )}
  </Container>
);
