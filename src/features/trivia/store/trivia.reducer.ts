import { AnyAction, Reducer } from 'redux';
import { set } from 'src/core/utils';

import {
  Question,
  TriviaActionType,
  TriviaReducerAction,
  TriviaState,
} from './trivia.types';

const initialState: TriviaState = {
  questions: [],
};

export const triviaReducer: Reducer<TriviaState, TriviaReducerAction> = (
  state = initialState,
  action: TriviaReducerAction,
): TriviaState => {
  switch (action.type) {
    case TriviaActionType.FETCH_QUESTIONS_SUCCESS:
      const questions: Question[] = action.payload;
      return set('questions', questions, state);
    default:
      return state;
  }
};
