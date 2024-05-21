import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       concat
 * Category:   list
 * 
 * Returns the result of concatenating the given lists or strings.
 * Note: R.concat expects both arguments to be of the same type,
 * unlike the native Array.prototype.concat method. It will throw
 * an error if you concat an Array with a non-Array value.
 * Dispatches to the concat method of the first argument, if present.
 * Can also concatenate two members of a fantasy-land
 * compatible semigroup.
 * 
 * 
 * ```typescript
 * R.concat('ABC', 'DEF'); // 'ABCDEF'
 * R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 * R.concat([], []); //=> []
 * ```
 * 
 * {@see https://ramdajs.com/docs/#concat}
 */
describe('list.concat', () => {
  it('should define R.concat', () => {
    expect.assertions(1);

    expect(R.concat).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.concat', () => {
    expect.assertions(1);
  });
});
