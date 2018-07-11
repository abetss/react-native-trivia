import { fetchQuestionsService } from './../services/index';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import { fetchQuestionsSuccess, fetchQuestionsError } from './trivia.actions';

import { TriviaState, TriviaAction, TriviaActionType } from './trivia.types';

const fetchQuestionsEpic: Epic<
  TriviaAction,
  TriviaAction,
  Partial<TriviaState>
> = action$ =>
  action$.pipe(
    ofType(TriviaActionType.FETCH_QUESTIONS_START),
    switchMap(() =>
      fetchQuestionsService()
        .then(questions => fetchQuestionsSuccess(questions))
        .catch(error => fetchQuestionsError(error)),
    ),
  );

export const triviaEpics = combineEpics(fetchQuestionsEpic);
