import React from 'react';
import { Container, Text, Header } from 'src/core/components';

export const TriviaQuizComponent: React.SFC<{}> = () => (
  <Container>
    <Header>
      <Text fontSize={4} fontWeight={6} textAlign="center" color="white.0">
        Entertainment: Video Games
      </Text>
    </Header>
  </Container>
);
