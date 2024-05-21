import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       mean
 * Category:   math
 *
 * Returns the mean of the given list of numbers.
 *
 *
 * ```typescript
 * R.mean([2, 7, 9]); //=> 6
 * R.mean([]); //=> NaN
 * ```
 *
 * {@see https://ramdajs.com/docs/#mean}
 * {@see https://ramdajs.com/docs/#median}
 */
describe('math.mean', () => {
  it('should provide the mean', () => {
    expect.assertions(1);

    expect(R.mean([2, 7, 9])).toBe(6);
  });

  it('should provide NaN if empty', () => {
    expect.assertions(1);

    expect(R.mean([])).toBeNaN();
  });
});
