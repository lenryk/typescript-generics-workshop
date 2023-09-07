import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// we add a constraint to the schema of the generic
// now we know what to expect we can use object signature to grab the types
// now we have reduced from 2 generic types to just 1
const returnBothOfWhatIPassIn = <T1 extends {a: unknown, b: unknown}>(params: T1): [T1["a"], T1["b"]] => {
  return [params.a, params.b];
};

it("Should return a tuple of the properties a and b", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual(["a", 1]);

  type test1 = Expect<Equal<typeof result, [string, number]>>;
});
