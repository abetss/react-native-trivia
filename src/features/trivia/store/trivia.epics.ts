import { combineEpics, Epic, ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

import { fetchQuestionsSuccess } from './trivia.actions';

import {
  TriviaEpicAction,
  TriviaState,
  TriviaAction,
  TriviaActionType,
} from './trivia.types';

const fetchQuestionsEpic: Epic<
  TriviaAction,
  TriviaAction,
  Partial<TriviaState>
> = action$ =>
  action$.pipe(
    ofType(TriviaActionType.FETCH_QUESTIONS_START),
    mapTo(fetchQuestionsSuccess([])),
  );

export const triviaEpics = combineEpics(fetchQuestionsEpic);
