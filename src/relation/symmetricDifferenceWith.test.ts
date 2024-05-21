import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       symmetricDifferenceWith
 * Category:   relation
 * 
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 * 
 * 
 * ```typescript
 * const eqA = R.eqBy(R.prop('a'));
 * const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 * const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 * R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#symmetricDifferenceWith}
 * {@see https://ramdajs.com/docs/#symmetricDifference,
                difference,
                differenceWith}
 */
describe('relation.symmetricDifferenceWith', () => {
  it('should define R.symmetricDifferenceWith', () => {
    expect.assertions(1);

    expect(R.symmetricDifferenceWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.symmetricDifferenceWith', () => {
    expect.assertions(1);
  });
});
