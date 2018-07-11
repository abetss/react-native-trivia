import React from 'react';
import { Container, Text, Button, Box, Header } from 'src/core/components';
import { NavigationScreenProps } from 'react-navigation';

export interface TriviaHomeProps extends NavigationScreenProps {
  onBeginClick: () => void;
  fetchQuestions: () => void;
}

export const TriviaHomeComponent: React.SFC<TriviaHomeProps> = ({
  onBeginClick,
}) => (
  <Container>
    <Header>
      <Text
        fontSize={4}
        fontWeight="bold"
        width={200}
        textAlign="center"
        color="white.0"
      >
        Welcome to the Trivia Challenge
      </Text>
    </Header>
    <Box px={2} flex={1} alignItems="center" justifyContent="space-around">
      <Text textAlign="center">
        You will be presented with 10 True and False questions.
      </Text>
      <Text textAlign="center">Can you score 100%</Text>
      <Button title="BEGIN" onPress={onBeginClick} w={150} mt={20} />
    </Box>
  </Container>
);
