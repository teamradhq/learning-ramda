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
  it('should define R.mean', () => {
    expect.assertions(1);

    expect(R.mean).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mean', () => {
    expect.assertions(1);
  });
});
