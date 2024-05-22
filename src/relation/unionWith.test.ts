import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       unionWith
 * Category:   relation
 *
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements. If an element exists
 * in both lists, the first element from the first list will be used.
 *
 *
 * ```typescript
 * const l1 = [{a: 1}, {a: 2}];
 * const l2 = [{a: 1}, {a: 4}];
 * R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 * ```
 *
 * {@see https://ramdajs.com/docs/#unionWith}
 * {@see https://ramdajs.com/docs/#union}
 */
describe('relation.unionWith', () => {
  it('should define R.unionWith', () => {
    expect.assertions(1);

    expect(R.unionWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.unionWith', () => {
    expect.assertions(1);
  });
});
