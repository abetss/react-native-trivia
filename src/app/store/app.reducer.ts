import { combineReducers } from 'redux';
import { triviaReducer } from 'src/features/trivia/store';

export const createRootReducer = () => {
  const rootReducers = combineReducers({
    trivia: triviaReducer,
  });
  return rootReducers;
};
