import { Equal, Expect } from "../helpers/type-utils";

// adding this generic constraint now returns the literal type instead of a widened type
export const inferItemLiteral = <T extends number | string>(t: T) => {
  return {
    output: t,
  };
};

const result1 = inferItemLiteral("a");
const result2 = inferItemLiteral(123);

type tests = [
  Expect<Equal<typeof result1, { output: "a" }>>,
  Expect<Equal<typeof result2, { output: 123 }>>
];

// @ts-expect-error
const error1 = inferItemLiteral({
  a: 1,
});

// @ts-expect-error
const error2 = inferItemLiteral([1, 2]);
