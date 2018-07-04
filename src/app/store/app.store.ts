import { appEpic } from './app.epics';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore, Store } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import { isDevEnv } from 'src/core/utils/config';
import { Action } from 'src/core/utils/store';

import { createRootReducer } from './app.reducer';
import { State } from './app.types';

const middlewares: any[] = [];
const epicMiddleware = createEpicMiddleware();

if (isDevEnv) {
  middlewares.push(logger);
}

middlewares.push(epicMiddleware);

const configureStore = (): Store<State, Action<any>> => {
  const store = createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  epicMiddleware.run(appEpic);

  return store;
};

export const store = configureStore();
