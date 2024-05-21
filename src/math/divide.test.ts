import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       divide
 * Category:   math
 *
 * Divides two numbers. Equivalent to a / b.
 *
 *
 * ```typescript
 * R.divide(71, 100); //=> 0.71
 *
 * const half = R.divide(R.__, 2);
 * half(42); //=> 21
 *
 * const reciprocal = R.divide(1);
 * reciprocal(4);   //=> 0.25
 * ```
 *
 * {@see https://ramdajs.com/docs/#divide}
 * {@see https://ramdajs.com/docs/#multiply}
 */
describe('math.divide', () => {
  it('should define R.divide', () => {
    expect.assertions(1);

    expect(R.divide).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.divide', () => {
    expect.assertions(1);
  });
});
