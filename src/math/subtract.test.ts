import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       subtract
 * Category:   math
 *
 * Subtracts its second argument from its first argument.
 *
 *
 * ```typescript
 * R.subtract(10, 8); //=> 2
 *
 * const minus5 = R.subtract(R.__, 5);
 * minus5(17); //=> 12
 *
 * const complementaryAngle = R.subtract(90);
 * complementaryAngle(30); //=> 60
 * complementaryAngle(72); //=> 18
 * ```
 *
 * {@see https://ramdajs.com/docs/#subtract}
 * {@see https://ramdajs.com/docs/#add}
 */
describe('math.subtract', () => {
  it('should subtract a value', () => {
    expect.assertions(1);

    expect(R.subtract(10, 8)).toBe(2);
  });

  it('should minus 5', () => {
    expect.assertions(1);

    const minus5 = R.subtract(R.__, 5);
    expect(minus5(17)).toBe(12);
  });

  it('should give the complementary angle', () => {
    expect.assertions(2);

    const complementaryAngle = R.subtract(90);

    expect(complementaryAngle(30)).toBe(60);
    expect(complementaryAngle(72)).toBe(18);
  });
});
