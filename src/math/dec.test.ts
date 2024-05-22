import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       dec
 * Category:   math
 *
 * Decrements its argument.
 *
 * {@see https://ramdajs.com/docs/#dec}
 * {@see https://ramdajs.com/docs/#inc}
 */
describe('math.dec', () => {
  it('should define R.dec', () => {
    expect.assertions(1);

    expect(R.dec(101)).toBe(100);
  });
});
