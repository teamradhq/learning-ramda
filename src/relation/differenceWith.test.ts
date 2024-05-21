import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       differenceWith
 * Category:   relation
 * 
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 * 
 * 
 * ```typescript
 * const cmp = (x, y) => x.a === y.a;
 * const l1 = [{a: 1}, {a: 2}, {a: 3}];
 * const l2 = [{a: 3}, {a: 4}];
 * R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 * 
 * R.differenceWith(R.equals, [1, 2, 3, 3, 3], []); //=> [1, 2, 3]
 * R.differenceWith(R.equals, [1, 2, 3, 3, 3], [1]); //=> [2, 3]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#differenceWith}
 * {@see https://ramdajs.com/docs/#difference,
                symmetricDifference,
                symmetricDifferenceWith}
 */
describe('relation.differenceWith', () => {
  it('should define R.differenceWith', () => {
    expect.assertions(1);

    expect(R.differenceWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.differenceWith', () => {
    expect.assertions(1);
  });
});
