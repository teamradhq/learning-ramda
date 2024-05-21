import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       uniq
 * Category:   list
 * 
 * Returns a new list containing only one copy of each element in the original
 * list. R.equals is used to determine equality.
 * 
 * 
 * ```typescript
 * R.uniq([1, 1, 2, 1]); //=> [1, 2]
 * R.uniq([1, '1']);     //=> [1, '1']
 * R.uniq([[42], [42]]); //=> [[42]]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#uniq}
 */
describe('list.uniq', () => {
  it('should define R.uniq', () => {
    expect.assertions(1);

    expect(R.uniq).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.uniq', () => {
    expect.assertions(1);
  });
});
