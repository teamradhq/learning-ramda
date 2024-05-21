import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       compose
 * Category:   function
 * 
 * Performs right-to-left function composition. The last argument may have
 * any arity; the remaining arguments must be unary.
 * Note: The result of compose is not automatically curried.
 * 
 * 
 * ```typescript
 * const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 * const yellGreeting = R.compose(R.toUpper, classyGreeting);
 * yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 * 
 * R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 * ```
 * 
 * {@see https://ramdajs.com/docs/#compose}
 * {@see https://ramdajs.com/docs/#pipe}
 */
describe('function.compose', () => {
  it('should define R.compose', () => {
    expect.assertions(1);

    expect(R.compose).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.compose', () => {
    expect.assertions(1);
  });
});
