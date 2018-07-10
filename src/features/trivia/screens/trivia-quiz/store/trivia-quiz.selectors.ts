import { State } from 'src/app/store/app.types';
import {
  createSelector,
  createStructuredSelector,
  Selector,
  OutputSelector,
} from 'reselect';
import { add, compose } from 'ramda';
import { decode } from 'he';

import { TriviaQuizConnector } from './trivia-quiz.types';
import { QUIZ_TOTAL_QUESTIONS } from '../../../store';

import { Question } from './../../../store/trivia.types';

const selectCurrentQuestionIndex: Selector<State, number> = state =>
  state.trivia.quiz.currentQuestionIndex;

const selectQuestions: Selector<State, Question[]> = state =>
  state.trivia.questions;

const selectIsLoading: Selector<State, boolean> = state =>
  state.trivia.isLoading;

const EmptyQuestion: Question = {
  question: '',
  category: '',
  correct_answer: false,
  difficulty: '',
  type: '',
};

const findCurrentQuestion = (
  currentQuestionIndex: number,
  questions: Question[],
): Question =>
  questions.length !== 0 ? questions[currentQuestionIndex] : EmptyQuestion;

const selectCurrentQuestion = createSelector<
  State,
  number,
  Question[],
  Question
>(selectCurrentQuestionIndex, selectQuestions, findCurrentQuestion);

const selectCurrentQuestionNumber = createSelector<State, number, number>(
  selectCurrentQuestionIndex,
  add(1),
);

const selectCurrentQuestionQuestion = createSelector<State, Question, string>(
  selectCurrentQuestion,
  compose(
    decode,
    (question: Question): string => question.question,
  ),
);

const selectCurrentQuestionCategory = createSelector<State, Question, string>(
  selectCurrentQuestion,
  (question: Question): string => question.category,
);

export const triviaQuizConnector = createStructuredSelector<
  State,
  TriviaQuizConnector
>({
  currentQuestionCategory: selectCurrentQuestionCategory,
  currentQuestionQuestion: selectCurrentQuestionQuestion,
  currentQuestionNumber: selectCurrentQuestionNumber,
  currentQuestionIndex: selectCurrentQuestionIndex,
  isLoading: selectIsLoading,
  totalNumberOfQuestion: () => QUIZ_TOTAL_QUESTIONS,
});
