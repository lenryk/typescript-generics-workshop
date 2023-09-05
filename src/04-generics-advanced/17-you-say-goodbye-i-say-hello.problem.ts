import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";


// check solution for another way
function youSayGoodbyeISayHello(greeting: "goodbye"): "hello"
function youSayGoodbyeISayHello(greeting: "hello"): "goodbye"
function youSayGoodbyeISayHello(greeting: "hello" | "goodbye") {
  return greeting === "goodbye" ? "hello" : "goodbye";
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
