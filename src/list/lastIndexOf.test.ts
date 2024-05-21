import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       lastIndexOf
 * Category:   list
 * 
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. R.equals is used to
 * determine equality.
 * 
 * 
 * ```typescript
 * R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 * R.lastIndexOf(10, [1,2,3,4]); //=> -1
 * ```
 * 
 * {@see https://ramdajs.com/docs/#lastIndexOf}
 * {@see https://ramdajs.com/docs/#indexOf,
                findLastIndex}
 */
describe('list.lastIndexOf', () => {
  it('should define R.lastIndexOf', () => {
    expect.assertions(1);

    expect(R.lastIndexOf).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.lastIndexOf', () => {
    expect.assertions(1);
  });
});
