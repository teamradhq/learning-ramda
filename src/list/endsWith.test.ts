import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       endsWith
 * Category:   list
 * 
 * Checks if a list ends with the provided sublist.
 * Similarly, checks if a string ends with the provided substring.
 * 
 * 
 * ```typescript
 * R.endsWith('c', 'abc')                //=> true
 * R.endsWith('b', 'abc')                //=> false
 * R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 * R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#endsWith}
 * {@see https://ramdajs.com/docs/#startsWith}
 */
describe('list.endsWith', () => {
  it('should define R.endsWith', () => {
    expect.assertions(1);

    expect(R.endsWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.endsWith', () => {
    expect.assertions(1);
  });
});
