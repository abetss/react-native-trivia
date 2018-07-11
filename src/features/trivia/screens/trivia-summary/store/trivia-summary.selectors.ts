import { createSelector, Selector, createStructuredSelector } from 'reselect';
import { map } from 'ramda';

import { State } from 'src/app';

import { QuestionResult, TriviaSummaryConnector } from './trivia-summary.types';

import { Question, selectQuestions } from './../../../store';

const selectAnswers: Selector<State, boolean[]> = state =>
  state.trivia.quiz.answers;

export interface QuestionAnswer {
  question: Question;
  answer: boolean;
}

const zipQuestionAnswers = (
  questions: Question[],
  answers: boolean[],
): QuestionAnswer[] =>
  questions.map((question, index) => ({
    question,
    answer: answers[index],
  }));

const selectQuestionAnswers = createSelector<
  State,
  Question[],
  boolean[],
  QuestionAnswer[]
>(selectQuestions, selectAnswers, zipQuestionAnswers);

const toQuestionTitleAnswers = (
  questionAnswer: QuestionAnswer,
): QuestionResult => ({
  questionTitle: questionAnswer.question.title,
  answer: questionAnswer.answer,
  answeredCorrectly:
    questionAnswer.question.correct_answer === questionAnswer.answer,
});

const selectQuestionResults = createSelector<
  State,
  QuestionAnswer[],
  QuestionResult[]
>(selectQuestionAnswers, map(toQuestionTitleAnswers));

const findNumberOfCorrectAnswers = (
  questionResults: QuestionResult[],
): number =>
  questionResults.reduce(
    (total, questionResult) =>
      questionResult.answeredCorrectly ? total + 1 : total,
    0,
  );

const selectNumberOfCorrectAnswers = createSelector<
  State,
  QuestionResult[],
  number
>(selectQuestionResults, findNumberOfCorrectAnswers);

export const triviaSummaryConnector = createStructuredSelector<
  State,
  TriviaSummaryConnector
>({
  questionResults: selectQuestionResults,
  numberOfCorrectAnswers: selectNumberOfCorrectAnswers,
});
