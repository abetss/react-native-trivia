import React from 'react';
import { Card, Box, Text, Icon } from 'src/core/components';
import { getThemeWidth } from 'src/design-system';

interface QuestionAnswerProps {
  questionTitle: string;
  answer: boolean;
  answeredCorrectly: boolean;
}

const getColorByAnswerCorrectness = (answeredCorrectly: boolean) =>
  answeredCorrectly ? 'green.0' : 'orange.0';

export const QuestionAnswerComponent: React.SFC<QuestionAnswerProps> = ({
  questionTitle,
  answer,
  answeredCorrectly,
}) => (
  <Card
    flex={1}
    mx={3}
    my={1}
    py={2}
    px={2}
    flexDirection="row"
    justifyContent="flex-start"
  >
    <Box flex={1} px={2} alignItems="center">
      {answer ? (
        <Icon
          size={getThemeWidth(1)}
          name="check-circle"
          bg={getColorByAnswerCorrectness(answeredCorrectly)}
        />
      ) : (
        <Icon
          size={getThemeWidth(1)}
          name="cancel"
          bg={getColorByAnswerCorrectness(answeredCorrectly)}
        />
      )}
    </Box>
    <Box flex={8} px={2}>
      <Text fontSize="2">{questionTitle}</Text>
    </Box>
  </Card>
);
