import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { mapDispatchers } from 'src/core/utils';

import { TriviaQuizComponent } from './trivia.quiz.component';
import { triviaQuizConnector } from './store';
import { TriviaQuizProps } from './trivia.quiz.types';

import {
  fetchQuestions,
  answerQuestion,
  isLastQuizQuestion,
} from '../../store';
import { TriviaNavigationRoute } from '../../navigation';

const dispatchers = mapDispatchers({
  fetchQuestions,
  answerQuestion,
});

const addHandlers = withHandlers({
  handleAnswerClick: (props: TriviaQuizProps) => (answer: boolean) => () => {
    props.answerQuestion(answer);
    if (isLastQuizQuestion(props.currentQuestionIndex)) {
      props.navigation.navigate(TriviaNavigationRoute.Summary);
    }
  },
});

export const TriviaQuizScreen = compose<TriviaQuizProps, {}>(
  connect(
    triviaQuizConnector,
    dispatchers,
  ),
  addHandlers,
)(TriviaQuizComponent);
