import { decode } from 'he';
import { Selector, createSelector } from 'reselect';
import { map } from 'ramda';

import { State } from 'src/app';

import { Question } from './trivia.types';
import { set } from '../../../core/utils';

const selectQuestionsRaw: Selector<State, Question[]> = state =>
  state.trivia.questions;

export const selectQuestions: Selector<State, Question[]> = createSelector<
  State,
  Question[],
  Question[]
>(
  selectQuestionsRaw,
  map(
    (question: Question): Question =>
      set('title', decode(question.title), question),
  ),
);
