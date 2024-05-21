import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';
/**
 * Name:       mathMod
 * Category:   math
 *
 * mathMod behaves like the modulo operator should mathematically, unlike the
 * % operator (and by extension, R.modulo). So while
 * -17 % 5 is -2, mathMod(-17, 5) is 3. mathMod requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 *
 * ```typescript
 * R.mathMod(-17, 5);  //=> 3
 * R.mathMod(17, 5);   //=> 2
 * R.mathMod(17, -5);  //=> NaN
 * R.mathMod(17, 0);   //=> NaN
 * R.mathMod(17.2, 5); //=> NaN
 * R.mathMod(17, 5.3); //=> NaN
 *
 * const clock = R.mathMod(R.__, 12);
 * clock(15); //=> 3
 * clock(24); //=> 0
 *
 * const seventeenMod = R.mathMod(17);
 * seventeenMod(3);  //=> 2
 * seventeenMod(4);  //=> 1
 * seventeenMod(10); //=> 7
 * ```
 *
 * {@see https://ramdajs.com/docs/#mathMod}
 * {@see https://ramdajs.com/docs/#modulo}
 */

describe('math.mathMod', () => {
  it('should yield a positive number', () => {
    expect.assertions(2);

    expect(R.mathMod(-17, 5)).toBe(3);
    expect(R.mathMod(17, 5)).toBe(2);
  });

  it('should yield NaN', () => {
    expect.assertions(4);

    expect(R.mathMod(17, -5)).toBeNaN();
    expect(R.mathMod(17, 0)).toBeNaN();
    expect(R.mathMod(17.2, 5)).toBeNaN();
    expect(R.mathMod(17, 5.3)).toBeNaN();
  });

  it('should convert 24 hour to 12', () => {
    expect.assertions(2);

    const clock = R.mathMod(R.__, 12);
    expect(clock(15)).toBe(3);
    expect(clock(24)).toBe(0);
  });

  it('should mod seventeen', () => {
    expect.assertions(3);

    const seventeenMod = R.mathMod(17);
    expect(seventeenMod(3)).toBe(2);
    expect(seventeenMod(4)).toBe(1);
    expect(seventeenMod(10)).toBe(7);
  });
});
