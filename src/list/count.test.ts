import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       count
 * Category:   list
 *
 * Returns the number of items in a given list matching the predicate f
 *
 *
 * ```typescript
 * const even = x => x % 2 == 0;
 *
 * R.count(even, [1, 2, 3, 4, 5]); // => 2
 * R.map(R.count(even), [[1, 1, 1], [2, 3, 4, 5], [6]]); // => [0, 2, 1]
 * ```
 *
 * {@see https://ramdajs.com/docs/#count}
 */
describe('list.count', () => {
  it('should define R.count', () => {
    expect.assertions(1);

    expect(R.count).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.count', () => {
    expect.assertions(1);
  });
});
