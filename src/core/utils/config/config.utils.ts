import { getProcessEnv } from '../environment';

export const isDevEnv = (): boolean =>
  getProcessEnv().NODE_ENV === 'development';
