import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       sum
 * Category:   math
 *
 * Adds together all the elements of a list.
 *
 * {@see https://ramdajs.com/docs/#sum}
 * {@see https://ramdajs.com/docs/#reduce}
 */
describe('math.sum', () => {
  it('should sum the values', () => {
    expect.assertions(1);

    expect(R.sum([2, 4, 6, 8, 100, 1])).toBe(121);
  });
});
