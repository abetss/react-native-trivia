import { Action as ReduxAction } from 'redux';

export interface Action<Type extends string, Meta = void>
  extends ReduxAction<Type> {
  readonly meta?: Meta;
}

export interface PayloadAction<Type extends string, Payload, Meta = void>
  extends Action<Type, Meta> {
  readonly payload: Payload;
}
