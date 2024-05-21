import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       o
 * Category:   function
 * 
 * o is a curried composition function that returns a unary function.
 * Like compose, o performs right-to-left function composition.
 * Unlike compose, the rightmost function passed to o will be
 * invoked with only one argument. Also, unlike compose, o is
 * limited to accepting only 2 unary functions. The name o was chosen because
 * of its similarity to the mathematical composition operator ∘.
 * 
 * 
 * ```typescript
 * const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 * const yellGreeting = R.o(R.toUpper, classyGreeting);
 * yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 * 
 * R.o(R.multiply(10), R.add(10))(-4) //=> 60
 * ```
 * 
 * {@see https://ramdajs.com/docs/#o}
 * {@see https://ramdajs.com/docs/#compose,
                pipe}
 */
describe('function.o', () => {
  it('should define R.o', () => {
    expect.assertions(1);

    expect(R.o).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.o', () => {
    expect.assertions(1);
  });
});
