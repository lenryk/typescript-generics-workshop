import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// if we pass 1 we want to return a type of 2
// if we pass a string we want to return the type of whatever the string is
function returnWhatIPassInExceptFor1(t: 1): 2;
function returnWhatIPassInExceptFor1<T extends string>(t: T): T;
function returnWhatIPassInExceptFor1<T>(t: 1 | T): 2 | T {
  if (t === 1) {
    return 2;
  }
  return t;
}

it("Should return the type 2 when you pass in 1", () => {
  const result = returnWhatIPassInExceptFor1(1);

  type test1 = Expect<Equal<typeof result, 2>>;
});

it("Otherwise, should return what you pass in", () => {
  const a = returnWhatIPassInExceptFor1("a");
  const b = returnWhatIPassInExceptFor1("b");
  const c = returnWhatIPassInExceptFor1("c");

  type tests = [
    Expect<Equal<typeof a, "a">>,
    Expect<Equal<typeof b, "b">>,
    Expect<Equal<typeof c, "c">>
  ];
});
