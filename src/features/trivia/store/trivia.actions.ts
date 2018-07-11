import { createAction } from 'src/core/utils/store';

import {
  FetchQuestionsSuccessAction,
  Question,
  TriviaActionType,
  FetchQuestionsStartAction,
  FetchQuestionsErrorAction,
  AnswerQuestionAction,
  ResetQuizAction,
} from './trivia.types';

export const fetchQuestions = (): FetchQuestionsStartAction =>
  createAction(TriviaActionType.FETCH_QUESTIONS_START);

export const fetchQuestionsSuccess = (
  payload: Question[],
): FetchQuestionsSuccessAction =>
  createAction(TriviaActionType.FETCH_QUESTIONS_SUCCESS, payload);

export const fetchQuestionsError = (error: any): FetchQuestionsErrorAction =>
  createAction(TriviaActionType.FETCH_QUESTIONS_ERROR, error);

export const answerQuestion = (answer: boolean): AnswerQuestionAction =>
  createAction(TriviaActionType.ANSWER_QUESTION, answer);

export const resetQuiz = (): ResetQuizAction =>
  createAction(TriviaActionType.RESET_QUIZ);
