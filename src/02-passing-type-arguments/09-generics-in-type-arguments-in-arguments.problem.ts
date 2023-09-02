import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

// here we make a generic then define the param of the function as a Component type
// since Component class is also a generic we can pass the type from the original function to the class
const cloneComponent = <T>(component: Component<T>) => {
  return new Component(component.getProps());
};

it("Should clone the props from a passed-in Component", () => {
  const component = new Component({ a: 1, b: 2, c: 3 });

  const clonedComponent = cloneComponent(component);

  const result = clonedComponent.getProps();

  expect(result).toEqual({ a: 1, b: 2, c: 3 });

  type tests = [
    Expect<Equal<typeof result, { a: number; b: number; c: number }>>
  ];
});
