import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       multiply
 * Category:   math
 *
 * Multiplies two numbers. Equivalent to a * b but curried.
 *
 *
 * ```typescript
 * const double = R.multiply(2);
 * const triple = R.multiply(3);
 * double(3);       //=>  6
 * triple(4);       //=> 12
 * R.multiply(2, 5);  //=> 10
 * ```
 *
 * {@see https://ramdajs.com/docs/#multiply}
 * {@see https://ramdajs.com/docs/#divide}
 */
describe('math.multiply', () => {
  it('should define R.multiply', () => {
    expect.assertions(1);

    expect(R.multiply).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.multiply', () => {
    expect.assertions(1);
  });
});
