import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       negate
 * Category:   math
 *
 * Negates its argument.
 *
 *
 * ```typescript
 * R.negate(42); //=> -42
 * ```
 *
 * {@see https://ramdajs.com/docs/#negate}
 */
describe('math.negate', () => {
  it('should negate a value', () => {
    expect.assertions(1);

    expect(R.negate(42)).toBe(-42);
  });
});
