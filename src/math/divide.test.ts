import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       divide
 * Category:   math
 *
 * Divides two numbers. Equivalent to a / b.
 *
 * {@see https://ramdajs.com/docs/#divide}
 * {@see https://ramdajs.com/docs/#multiply}
 */
describe('math.divide', () => {
  it('should divide a number', () => {
    expect.assertions(1);

    expect(R.divide(71, 100)).toBe(0.71);
  });

  it('should halve a number', () => {
    expect.assertions(1);

    const half = R.divide(R.__, 2);
    expect(half(42)).toBe(21);
  });

  it('should find the reciprocal of a number', () => {
    expect.assertions(1);

    const reciprocal = R.divide(1);
    expect(reciprocal(4)).toBe(0.25);
  });
});
