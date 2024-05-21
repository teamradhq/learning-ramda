import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       length
 * Category:   list
 * 
 * Returns the number of elements in the array by returning list.length.
 * 
 * 
 * ```typescript
 * R.length([]); //=> 0
 * R.length([1, 2, 3]); //=> 3
 * ```
 * 
 * {@see https://ramdajs.com/docs/#length}
 */
describe('list.length', () => {
  it('should define R.length', () => {
    expect.assertions(1);

    expect(R.length).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.length', () => {
    expect.assertions(1);
  });
});
