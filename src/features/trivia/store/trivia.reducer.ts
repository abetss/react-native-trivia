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
import { isLastQuizQuestion } from './trivia.utils';

const initialState: TriviaState = {
  questions: [],
  quiz: {
    answers: [],
    currentQuestionIndex: 0,
  },
  isLoading: false,
};

const getNextQuestionIndex = (currentQuestionIndex: number) =>
  isLastQuizQuestion(currentQuestionIndex)
    ? currentQuestionIndex
    : currentQuestionIndex + 1;

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
      const questions = action.payload;
      return overwriteState({ questions, isLoading: false });
    case TriviaActionType.FETCH_QUESTIONS_ERROR:
      return setState('isLoading', false);
    case TriviaActionType.ANSWER_QUESTION:
      const answer = action.payload;
      const answers = [...state.quiz.answers, answer];
      const currentQuestionIndex = getNextQuestionIndex(
        state.quiz.currentQuestionIndex,
      );
      return overwriteState({ quiz: { answers, currentQuestionIndex } });
    default:
      return state;
  }
};
