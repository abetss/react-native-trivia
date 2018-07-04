import { createRootReducer } from './app.reducer';

describe('app.reducer tests', () => {
  it('should create the app root reducer', () => {
    expect(createRootReducer()).toBeDefined();
  });
});
