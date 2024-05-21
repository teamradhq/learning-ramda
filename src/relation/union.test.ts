import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       union
 * Category:   relation
 * 
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 * 
 * 
 * ```typescript
 * R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#union}
 */
describe('relation.union', () => {
  it('should define R.union', () => {
    expect.assertions(1);

    expect(R.union).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.union', () => {
    expect.assertions(1);
  });
});
