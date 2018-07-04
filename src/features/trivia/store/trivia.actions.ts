import { createAction, PayloadAction } from 'src/core/utils/store';

import {
  FetchQuestionsSuccessAction,
  Question,
  TriviaActionType,
} from './trivia.types';

export const fetchQuestionsSuccess = (payload: Question[]) =>
  createAction(TriviaActionType.FETCH_QUESTIONS_SUCCESS, payload);
