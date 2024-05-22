import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       inc
 * Category:   math
 *
 * Increments its argument.
 *
 * {@see https://ramdajs.com/docs/#inc}
 * {@see https://ramdajs.com/docs/#dec}
 */
describe('math.inc', () => {
  it('should increment a value', () => {
    expect.assertions(1);

    expect(R.inc(42)).toBe(43);
  });
});
