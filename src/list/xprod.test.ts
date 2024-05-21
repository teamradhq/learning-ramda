import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       xprod
 * Category:   list
 * 
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 * 
 * 
 * ```typescript
 * R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#xprod}
 */
describe('list.xprod', () => {
  it('should define R.xprod', () => {
    expect.assertions(1);

    expect(R.xprod).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.xprod', () => {
    expect.assertions(1);
  });
});
