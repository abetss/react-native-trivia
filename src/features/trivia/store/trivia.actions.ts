import { createAction, PayloadAction } from 'src/core/utils/store';

import {
  FetchQuestionsSuccessAction,
  Question,
  TriviaActionType,
} from './trivia.types';

export const fetchQuestions = () =>
  createAction(TriviaActionType.FETCH_QUESTIONS_START);

export const fetchQuestionsSuccess = (payload: Question[]) =>
  createAction(TriviaActionType.FETCH_QUESTIONS_SUCCESS, payload);

export const fetchQuestionsError = (error: any) =>
  createAction(TriviaActionType.FETCH_QUESTIONS_ERROR, error);
