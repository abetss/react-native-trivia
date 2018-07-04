import { Action, PayloadAction } from './store.types';

export function createAction<Type extends string>(type: Type): Action<Type>;
export function createAction<Type extends string, Payload>(
  type: Type,
  payload: Payload,
): PayloadAction<Type, Payload>;
export function createAction<Type extends string, Payload>(
  type: Type,
  payload?: any,
) {
  return payload ? { type, payload } : { type };
}
