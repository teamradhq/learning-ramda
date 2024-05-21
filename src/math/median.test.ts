import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       median
 * Category:   math
 *
 * Returns the median of the given list of numbers.
 *
 *
 * ```typescript
 * R.median([2, 9, 7]); //=> 7
 * R.median([7, 2, 10, 9]); //=> 8
 * R.median([]); //=> NaN
 * ```
 *
 * {@see https://ramdajs.com/docs/#median}
 * {@see https://ramdajs.com/docs/#mean}
 */
describe('math.median', () => {
  it('should define R.median', () => {
    expect.assertions(1);

    expect(R.median).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.median', () => {
    expect.assertions(1);
  });
});
