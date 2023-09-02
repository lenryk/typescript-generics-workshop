import { Equal, Expect } from "../helpers/type-utils";

// we set a generic for the function we can send to the Set class
// all sets have generics built in we just need to grab the type and pass it
export const createSet = <T>() => {
  return new Set<T>();
};

const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();

type tests = [
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof unknownSet, Set<unknown>>>,
];
