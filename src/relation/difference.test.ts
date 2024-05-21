import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       difference
 * Category:   relation
 * 
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 * 
 * 
 * ```typescript
 * R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 * R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 * R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#difference}
 * {@see https://ramdajs.com/docs/#differenceWith,
                symmetricDifference,
                symmetricDifferenceWith,
                without}
 */
describe('relation.difference', () => {
  it('should define R.difference', () => {
    expect.assertions(1);

    expect(R.difference).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.difference', () => {
    expect.assertions(1);
  });
});
