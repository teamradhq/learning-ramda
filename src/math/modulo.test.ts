import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       modulo
 * Category:   math
 *
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see mathMod.
 *
 *
 * ```typescript
 * R.modulo(17, 3); //=> 2
 * // JS behavior:
 * R.modulo(-17, 3); //=> -2
 * R.modulo(17, -3); //=> 2
 *
 * const isOdd = R.modulo(R.__, 2);
 * isOdd(42); //=> 0
 * isOdd(21); //=> 1
 * ```
 *
 * {@see https://ramdajs.com/docs/#modulo}
 * {@see https://ramdajs.com/docs/#mathMod}
 */
describe('math.modulo', () => {
  it('should provide the modulus', () => {
    expect.assertions(3);

    expect(R.modulo(17, 3)).toBe(2);
    expect(R.modulo(-17, 3)).toBe(-2);
    expect(R.modulo(17, -3)).toBe(2);
  });

  it('should be odd or even', () => {
    expect.assertions(2);

    const isOdd = R.modulo(R.__, 2);
    expect(isOdd(42)).toBe(0);
    expect(isOdd(21)).toBe(1);
  });
});
