import { mapDispatchers } from 'src/core/utils';
import { fetchQuestions } from '../../store';
import { compose, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import {
  TriviaHomeComponent,
  TriviaHomeProps,
} from '../trivia-home/trivia-home.component';
import { TriviaNavigationRoute } from '../../navigation';

const dispatchers = mapDispatchers({
  fetchQuestions,
});

const addHandlers = withHandlers({
  onBeginClick: (props: TriviaHomeProps) => () => {
    props.navigation.navigate(TriviaNavigationRoute.Quiz);
  },
});

const addLifeCycles = lifecycle<TriviaHomeProps, {}>({
  componentDidMount() {
    const { fetchQuestions } = this.props;
    fetchQuestions();
  },
});

export const TriviaHomeScreen = compose<TriviaHomeProps, {}>(
  connect(
    () => ({}),
    dispatchers,
  ),
  addHandlers,
  addLifeCycles,
)(TriviaHomeComponent);
