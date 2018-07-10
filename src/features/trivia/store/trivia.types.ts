import { Action, PayloadAction } from 'src/core/utils/store';
import { Diff } from 'src/core/utils/typescript';

export enum TriviaActionType {
  FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR',
  FETCH_QUESTIONS_START = 'FETCH_QUESTIONS_START',
  FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS',
  ANSWER_QUESTION = 'ANSWER_QUESTION',
}

export interface Question {
  readonly category: string;
  readonly type: string;
  readonly difficulty: string;
  readonly question: string;
  readonly correct_answer: boolean; // and more
}

export interface Answer {
  answer: boolean;
}

export interface Quiz {
  readonly answers: Answer[];
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

export type TriviaAction =
  | FetchQuestionsStartAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsErrorAction
  | AnswerQuestionAction;

// Todo: remove these two
export type TriviaEpicAction = FetchQuestionsStartAction;

export type TriviaReducerAction = Diff<TriviaAction, TriviaEpicAction>;
