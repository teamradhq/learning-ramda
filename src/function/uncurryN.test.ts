import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       uncurryN
 * Category:   function
 * 
 * Returns a function of arity n from a (manually) curried function.
 * Note that, the returned function is actually a ramda style
 * curryied function, which can accept one or more arguments in each
 * function calling.
 * 
 * 
 * ```typescript
 * const addFour = a => b => c => d => a + b + c + d;
 * 
 * const uncurriedAddFour = R.uncurryN(4, addFour);
 * uncurriedAddFour(1, 2, 3, 4); //=> 10
 * ```
 * 
 * {@see https://ramdajs.com/docs/#uncurryN}
 * {@see https://ramdajs.com/docs/#curry,
                curryN}
 */
describe('function.uncurryN', () => {
  it('should define R.uncurryN', () => {
    expect.assertions(1);

    expect(R.uncurryN).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.uncurryN', () => {
    expect.assertions(1);
  });
});
