import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       identical
 * Category:   relation
 * 
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. NaN is identical to NaN;
 * 0 and -0 are not identical.
 * Note this is merely a curried version of ES6 Object.is.
 * identical does not support the __ placeholder.
 * 
 * 
 * ```typescript
 * const o = {};
 * R.identical(o, o); //=> true
 * R.identical(1, 1); //=> true
 * R.identical(1, '1'); //=> false
 * R.identical([], []); //=> false
 * R.identical(0, -0); //=> false
 * R.identical(NaN, NaN); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#identical}
 */
describe('relation.identical', () => {
  it('should define R.identical', () => {
    expect.assertions(1);

    expect(R.identical).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.identical', () => {
    expect.assertions(1);
  });
});
