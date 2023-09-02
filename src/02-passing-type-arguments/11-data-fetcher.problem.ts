import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// we pass a type to fetchData which is what we expect the return type to be
// since we return data we need to make sure data is of type T
const fetchData = async <T>(url: string) => {
  const data: T = await fetch(url).then((response) => response.json());
  return data;
  // return data as T;
  // could also do this
};

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }>(
    "https://swapi.dev/api/people/1",
  );
  expect(data.name).toEqual("Luke Skywalker");

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
