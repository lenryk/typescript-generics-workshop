import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";


// we define the two signatures for the object or function version
// the main implementation has a union for both functions and objects input - and returns string
// in this case we can just declare the generator as union as the return type doesn't change
function runGenerator(generator: { run: () => string }): string
function runGenerator(generator: () => string): string
function runGenerator(generator: { run: () => string } | (() => string)): string {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator({
    run: () => "hello",
  });

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator(() => "hello");

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});
