import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       multiply
 * Category:   math
 *
 * Multiplies two numbers. Equivalent to a * b but curried.
 *
 * {@see https://ramdajs.com/docs/#multiply}
 * {@see https://ramdajs.com/docs/#divide}
 */
describe('math.multiply', () => {
  it('should should multiply values', () => {
    expect.assertions(3);

    const double = R.multiply(2);
    const triple = R.multiply(3);

    expect(double(3)).toBe(6);
    expect(triple(4)).toBe(12);
    expect(R.multiply(2, 5)).toBe(10);
  });
});
