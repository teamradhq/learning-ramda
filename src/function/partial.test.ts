import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       partial
 * Category:   function
 *
 * Takes a function f and a list of arguments, and returns a function g. When applied,
 * g returns the result of applying f to the arguments provided initially followed
 * by the arguments provided to g.
 *
 * {@see https://ramdajs.com/docs/#partial}
 * {@see https://ramdajs.com/docs/#partialRight}
 * {@see https://ramdajs.com/docs/#curry}
 */
describe('function.partial', () => {
  it('should partially apply 2', () => {
    expect.assertions(1);

    const multiply = (a: number, b: number) => a * b;
    const double = R.partial(multiply, [2]);

    expect(double(3)).toBe(6);
  });

  it('should partially apply a greeting', () => {
    expect.assertions(1);

    const greet = (salutation: string, title: string, firstName: string, lastName: string) =>
      `${salutation}, ${title} ${firstName} ${lastName}!`;

    const sayHello = R.partial(greet, ['Hello']);
    const sayHelloToMs = R.partial(sayHello, ['Ms.']);

    expect(sayHelloToMs('Jane', 'Jones')).toBe('Hello, Ms. Jane Jones!');
  });
});
