import { Reducer } from 'redux';

import { TriviaState } from 'src/features/trivia';

export type State = {
  readonly trivia: TriviaState;
};
