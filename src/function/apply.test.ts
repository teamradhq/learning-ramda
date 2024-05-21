import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       apply
 * Category:   function
 * 
 * Applies function fn to the argument list args. This is useful for
 * creating a fixed-arity function from a variadic function. fn should be a
 * bound function if context is significant.
 * 
 * 
 * ```typescript
 * const nums = [1, 2, 3, -99, 42, 6, 7];
 * R.apply(Math.max, nums); //=> 42
 * ```
 * 
 * {@see https://ramdajs.com/docs/#apply}
 * {@see https://ramdajs.com/docs/#call,
                unapply}
 */
describe('function.apply', () => {
  it('should define R.apply', () => {
    expect.assertions(1);

    expect(R.apply).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.apply', () => {
    expect.assertions(1);
  });
});
