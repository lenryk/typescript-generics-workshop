import { Equal, Expect } from "../helpers/type-utils";

// here we convert the first param into an empty function that returns a 2nd function
export const makeSelectors =
  <TSource>() =>
  <TSelectors extends Record<string, (source: TSource) => any>>(
  selectors: TSelectors,
) => {
  return selectors;
};

interface Source {
  firstName: string;
  middleName: string;
  lastName: string;
}

/**
 * We've got a problem here. We want to be able to infer the type
 * of the selectors object from what we passed in to makeSelectors.
 *
 * But we can't. As soon as we pass ONE type argument, inference
 * doesn't work on the other type arguments. We want to refactor this
 * so that we can infer the type of the selectors object.
 *
 * Desired API:
 *
 * makeSelectors<Source>()({ ...selectorsGoHere })
 */
// here we have to add a function call for our first function before we call the second function
const selectors = makeSelectors<Source>()({
  getFullName: (source) =>
    `${source.firstName} ${source.middleName} ${source.lastName}`,
  getFirstAndLastName: (source) => `${source.firstName} ${source.lastName}`,
  getFirstNameLength: (source) => source.firstName.length,
});

type tests = [
  Expect<Equal<(typeof selectors)["getFullName"], (source: Source) => string>>,
  Expect<
    Equal<(typeof selectors)["getFirstAndLastName"], (source: Source) => string>
  >,
  Expect<
    Equal<(typeof selectors)["getFirstNameLength"], (source: Source) => number>
  >,
];
