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
  it('should define R.modulo', () => {
    expect.assertions(1);

    expect(R.modulo).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.modulo', () => {
    expect.assertions(1);
  });
});
