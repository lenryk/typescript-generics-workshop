import { Equal, Expect } from "../helpers/type-utils";

type Person = {
  name: string;
  age: number;
  birthdate: Date;
};

export function remapPerson<Key extends keyof Person>(
  key: Key,
  value: Person[Key],
): Person[Key] {
  // type narrowing inside a generic
  if (key === "birthdate") {
    // overwrite the return type using as
    // better to return expected type instead of any
    return new Date() as Person[Key];
  }

  return value;
}

const date = remapPerson("birthdate", new Date());
const num = remapPerson("age", 42);
const name = remapPerson("name", "John Doe");

type tests = [
  Expect<Equal<typeof date, Date>>,
  Expect<Equal<typeof num, number>>,
  Expect<Equal<typeof name, string>>,
];
