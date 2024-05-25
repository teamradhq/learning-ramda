import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       compose
 * Category:   function
 *
 * Performs right-to-left function composition. The last argument may have any arity; the
 * remaining arguments must be unary.
 *
 * Note: The result of compose is not automatically curried.
 *
 * {@see https://ramdajs.com/docs/#compose}
 * {@see https://ramdajs.com/docs/#pipe}
 */
describe('function.compose', () => {
  it('should compose a function', () => {
    expect.assertions(1);

    const classyGreeting = (first: string, last: string) => `The name's ${last}, ${first} ${last}`;
    const yellGreeting = R.compose(R.toUpper, classyGreeting);

    expect(yellGreeting('James', 'Bond')).toBe("THE NAME'S BOND, JAMES BOND");
  });

  it('should apply functions from left to right', () => {
    expect.assertions(1);

    const addOne = R.add(1);
    const double = R.multiply(2);
    const doubleAddOneAbsolute = R.compose(Math.abs, addOne, double);

    expect(doubleAddOneAbsolute(-4)).toBe(7);
  });
});
