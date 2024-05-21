import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       join
 * Category:   list
 * 
 * Returns a string made by inserting the separator between each element and
 * concatenating all the elements into a single string.
 * 
 * 
 * ```typescript
 * const spacer = R.join(' ');
 * spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 * R.join('|', [1, 2, 3]);    //=> '1|2|3'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#join}
 * {@see https://ramdajs.com/docs/#split}
 */
describe('list.join', () => {
  it('should define R.join', () => {
    expect.assertions(1);

    expect(R.join).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.join', () => {
    expect.assertions(1);
  });
});
