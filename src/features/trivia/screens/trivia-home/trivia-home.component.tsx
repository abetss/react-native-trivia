import React from 'react';
import { Container, Text, Button, Box, Header } from 'src/core/components';
import { NavigationScreenProps } from 'react-navigation';

export class TriviaHomeComponent extends React.Component<
  NavigationScreenProps
> {
  public navigateToQuiz = () => {
    this.props.navigation.navigate('quiz');
  };

  public render() {
    return (
      <Container>
        <Header>
          <Text fontSize={4} fontWeight={6} textAlign="center" color="white.0">
            Welcome to the Trivia Challenge
          </Text>
        </Header>
        <Box px={2} flex={1} alignItems="center" justifyContent="space-around">
          <Text textAlign="center">
            You will be presented with 10 True and False questions.
          </Text>
          <Text textAlign="center">Can you score 100%</Text>
          <Button title="BEGIN" onPress={this.navigateToQuiz} w={150} mt={20} />
        </Box>
      </Container>
    );
  }
}
