import { createSelector, createStructuredSelector, Selector } from 'reselect';
import { add, compose } from 'ramda';
import { decode } from 'he';

import { State } from 'src/app';

import { TriviaQuizConnector } from './trivia-quiz.types';

import { selectQuestions, Question } from '../../../store';

const selectCurrentQuestionIndex: Selector<State, number> = state =>
  state.trivia.quiz.currentQuestionIndex;

const selectIsLoading: Selector<State, boolean> = state =>
  state.trivia.isLoading;

const EmptyQuestion: Question = {
  title: '',
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

const selectCurrentQuestionTitle = createSelector<State, Question, string>(
  selectCurrentQuestion,
  compose(
    decode,
    (question: Question): string => question.title,
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
  currentQuestionTitle: selectCurrentQuestionTitle,
  currentQuestionNumber: selectCurrentQuestionNumber,
  currentQuestionIndex: selectCurrentQuestionIndex,
  isLoading: selectIsLoading,
});
