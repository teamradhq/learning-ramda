import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       ap
 * Category:   function
 * 
 * ap applies a list of functions to a list of values.
 * Dispatches to the ap method of the first argument, if present. Also
 * treats curried functions as applicatives.
 * 
 * 
 * ```typescript
 * R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 * R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 * 
 * // R.ap can also be used as S combinator
 * // when only two functions are passed
 * R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#ap}
 */
describe('function.ap', () => {
  it('should define R.ap', () => {
    expect.assertions(1);

    expect(R.ap).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.ap', () => {
    expect.assertions(1);
  });
});
