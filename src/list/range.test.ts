import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       range
 * Category:   list
 *
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * {@see https://ramdajs.com/docs/#range}
 */
describe('list.range', () => {
  it('should define a range', () => {
    expect.assertions(2);

    expect(R.range(1, 5)).toStrictEqual([1, 2, 3, 4]);
    expect(R.range(50, 53)).toStrictEqual([50, 51, 52]);
  });
});
