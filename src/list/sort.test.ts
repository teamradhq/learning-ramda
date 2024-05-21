import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       sort
 * Category:   list
 * 
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a copy of the list. It does not
 * modify the original.
 * 
 * 
 * ```typescript
 * const diff = function(a, b) { return a - b; };
 * R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#sort}
 * {@see https://ramdajs.com/docs/#ascend,
                descend}
 */
describe('list.sort', () => {
  it('should define R.sort', () => {
    expect.assertions(1);

    expect(R.sort).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.sort', () => {
    expect.assertions(1);
  });
});
