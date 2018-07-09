import { assoc, mergeDeepRight } from 'ramda';

export const set = <O, K extends keyof O>(key: string, val: O[K], object: O) =>
  assoc(key, val, object);

export const makeSet = <O>(object: O) => <K extends keyof O>(
  key: string,
  val: O[K],
) => assoc(key, val, object);

// Todo: make this generic
export const makeOverwrite = <O>(initialObject: O) => (
  updateObject: object,
): O => mergeDeepRight(initialObject, updateObject);
