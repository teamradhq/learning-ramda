import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       flatten
 * Category:   list
 *
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 *
 * ```typescript
 * R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 * //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 * ```
 *
 * {@see https://ramdajs.com/docs/#flatten}
 * {@see https://ramdajs.com/docs/#unnest}
 */
describe('list.flatten', () => {
  it('should define R.flatten', () => {
    expect.assertions(1);

    expect(R.flatten).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.flatten', () => {
    expect.assertions(1);
  });
});
