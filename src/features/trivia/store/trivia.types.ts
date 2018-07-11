import { Action, PayloadAction } from 'src/core/utils/store';

export enum TriviaActionType {
  FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR',
  FETCH_QUESTIONS_START = 'FETCH_QUESTIONS_START',
  FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS',
  ANSWER_QUESTION = 'ANSWER_QUESTION',
  RESET_QUIZ = 'RESET_QUIZ',
}

export interface Question {
  readonly category: string;
  readonly type: string;
  readonly difficulty: string;
  readonly title: string;
  readonly correct_answer: boolean; // and more
}

export interface Quiz {
  readonly answers: boolean[];
  readonly currentQuestionIndex: number;
}

export type TriviaState = {
  readonly questions: Question[];
  readonly quiz: Quiz;
  readonly isLoading: boolean;
};

export type FetchQuestionsStartAction = Action<
  TriviaActionType.FETCH_QUESTIONS_START
>;
export type FetchQuestionsErrorAction = Action<
  TriviaActionType.FETCH_QUESTIONS_ERROR
>;
export type FetchQuestionsSuccessAction = PayloadAction<
  TriviaActionType.FETCH_QUESTIONS_SUCCESS,
  Question[]
>;

export type AnswerQuestionAction = PayloadAction<
  TriviaActionType.ANSWER_QUESTION,
  boolean
>;
export type ResetQuizAction = Action<TriviaActionType.RESET_QUIZ>;

export type TriviaAction =
  | FetchQuestionsStartAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsErrorAction
  | AnswerQuestionAction
  | ResetQuizAction;
