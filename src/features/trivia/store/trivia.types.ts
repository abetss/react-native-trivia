import { Action, PayloadAction } from 'src/core/utils/store';
import { Diff } from 'src/core/utils/typescript';

export enum TriviaActionType {
  FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR',
  FETCH_QUESTIONS_START = 'FETCH_QUESTIONS_START',
  FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS',
}

export interface Question {
  readonly category: string;
  // and more
}

export type TriviaState = {
  readonly questions: ReadonlyArray<Question>;
};

export type FetchQuestionsStart = Action<
  TriviaActionType.FETCH_QUESTIONS_START
>;
export type FetchQuestionsError = Action<
  TriviaActionType.FETCH_QUESTIONS_ERROR
>;
export type FetchQuestionsSuccessAction = PayloadAction<
  TriviaActionType.FETCH_QUESTIONS_SUCCESS,
  Question[]
>;

export type TriviaAction =
  | FetchQuestionsStart
  | FetchQuestionsSuccessAction
  | FetchQuestionsError;

export type TriviaEpicAction = FetchQuestionsStart;

export type TriviaReducerAction = Diff<TriviaAction, TriviaEpicAction>;
