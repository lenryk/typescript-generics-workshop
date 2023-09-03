import { Equal, Expect } from "../helpers/type-utils";

// by constraining it to string we can now infer the individual array types
const makeStatus = <T extends string>(statuses: T[]) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
];
