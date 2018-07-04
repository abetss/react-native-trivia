import { Epic, combineEpics } from 'redux-observable';

import { triviaEpics } from 'src/features/trivia/store';

export const appEpic: Epic = combineEpics(triviaEpics);
