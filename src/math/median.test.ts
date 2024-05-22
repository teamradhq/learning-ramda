import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       median
 * Category:   math
 *
 * Returns the median of the given list of numbers.
 *
 * {@see https://ramdajs.com/docs/#median}
 * {@see https://ramdajs.com/docs/#mean}
 */
describe('math.median', () => {
  it('should compute the median', () => {
    expect.assertions(2);

    expect(R.median([2, 9, 7])).toBe(7);
    expect(R.median([7, 2, 10, 9])).toBe(8);
  });

  it('should be NaN for empty list', () => {
    expect.assertions(1);

    expect(R.median([])).toBeNaN();
  });
});
