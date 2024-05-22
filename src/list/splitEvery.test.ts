import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       splitEvery
 * Category:   list
 *
 * Splits a collection into slices of the specified length.
 *
 *
 * ```typescript
 * R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 * R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 * ```
 *
 * {@see https://ramdajs.com/docs/#splitEvery}
 */
describe('list.splitEvery', () => {
  it('should define R.splitEvery', () => {
    expect.assertions(1);

    expect(R.splitEvery).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.splitEvery', () => {
    expect.assertions(1);
  });
});
