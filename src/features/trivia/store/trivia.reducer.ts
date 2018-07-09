import {
  makeSet,
  makeOverwrite,
} from './../../../core/utils/functional/functional.utils';
import { AnyAction, Reducer } from 'redux';
import { set } from 'src/core/utils';

import {
  Question,
  TriviaActionType,
  TriviaAction,
  TriviaState,
} from './trivia.types';

const initialState: TriviaState = {
  questions: [],
  isLoading: false,
};

export const triviaReducer: Reducer<TriviaState, TriviaAction> = (
  state = initialState,
  action,
): TriviaState => {
  const setState = makeSet(state);
  const overwriteState = makeOverwrite(state);
  switch (action.type) {
    case TriviaActionType.FETCH_QUESTIONS_START:
      return setState('isLoading', true);
    case TriviaActionType.FETCH_QUESTIONS_SUCCESS:
      const questions: Question[] = action.payload;
      return overwriteState({ questions, isLoading: false });
    case TriviaActionType.FETCH_QUESTIONS_ERROR:
      return setState('isLoading', false);
    default:
      return state;
  }
};
