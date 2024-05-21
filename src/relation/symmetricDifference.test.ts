import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       symmetricDifference
 * Category:   relation
 * 
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 * 
 * 
 * ```typescript
 * R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 * R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#symmetricDifference}
 * {@see https://ramdajs.com/docs/#symmetricDifferenceWith,
                difference,
                differenceWith}
 */
describe('relation.symmetricDifference', () => {
  it('should define R.symmetricDifference', () => {
    expect.assertions(1);

    expect(R.symmetricDifference).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.symmetricDifference', () => {
    expect.assertions(1);
  });
});
