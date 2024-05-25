import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       zip
 * Category:   list
 *
 * Creates a new list out of the two supplied by pairing up equally-positioned  items from both
 * lists. The returned list is truncated to the length of the shorter of the two input lists.
 * Note: zip is equivalent to zipWith(function(a, b) { return [a, b] }).
 *
 * {@see https://ramdajs.com/docs/#zip}
 */
describe('list.zip', () => {
  it('should zip two arrays', () => {
    expect.assertions(1);

    expect(R.zip([1, 2, 3], ['a', 'b', 'c'])).toStrictEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ]);
  });

  it('should have length of the shortest array', () => {
    expect.assertions(1);

    expect(R.zip([1, 2, 3], ['a', 'b', 'c', 'd'])).toHaveLength(3);
  });
});
