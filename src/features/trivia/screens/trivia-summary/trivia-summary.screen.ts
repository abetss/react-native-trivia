import { fetchQuestions } from './../../store/trivia.actions';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { mapDispatchers } from 'src/core/utils';

import {
  TriviaSummaryProps,
  TriviaSummaryComponent,
} from './trivia-summary.component';
import { triviaSummaryConnector } from './store';

import { TriviaNavigationRoute } from '../../navigation';
import { resetQuiz } from '../../store';

const dispatchers = mapDispatchers({
  resetQuiz,
  fetchQuestions,
});

const addHandlers = withHandlers({
  handleRetryClick: (props: TriviaSummaryProps) => () => {
    props.resetQuiz();
    props.fetchQuestions();
    props.navigation.navigate(TriviaNavigationRoute.Quiz);
  },
});

export const TriviaSummaryScreen = compose<TriviaSummaryProps, {}>(
  connect(
    triviaSummaryConnector,
    dispatchers,
  ),
  addHandlers,
)(TriviaSummaryComponent);
