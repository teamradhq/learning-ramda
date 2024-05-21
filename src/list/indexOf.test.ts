import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       indexOf
 * Category:   list
 * 
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. R.equals is used to
 * determine equality.
 * 
 * 
 * ```typescript
 * R.indexOf(3, [1,2,3,4]); //=> 2
 * R.indexOf(10, [1,2,3,4]); //=> -1
 * ```
 * 
 * {@see https://ramdajs.com/docs/#indexOf}
 * {@see https://ramdajs.com/docs/#lastIndexOf,
                findIndex}
 */
describe('list.indexOf', () => {
  it('should define R.indexOf', () => {
    expect.assertions(1);

    expect(R.indexOf).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.indexOf', () => {
    expect.assertions(1);
  });
});
