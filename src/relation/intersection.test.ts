import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       intersection
 * Category:   relation
 *
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 *
 * ```typescript
 * R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 * ```
 *
 * {@see https://ramdajs.com/docs/#intersection}
 * {@see https://ramdajs.com/docs/#innerJoin}
 */
describe('relation.intersection', () => {
  it('should define R.intersection', () => {
    expect.assertions(1);

    expect(R.intersection).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.intersection', () => {
    expect.assertions(1);
  });
});
