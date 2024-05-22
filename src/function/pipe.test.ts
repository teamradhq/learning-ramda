import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       pipe
 * Category:   function
 *
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 * In some libraries this function is named sequence.
 * Note: The result of pipe is not automatically curried.
 *
 *
 * ```typescript
 * const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 * f(3, 4); // -(3^4) + 1
 * ```
 *
 * {@see https://ramdajs.com/docs/#pipe}
 * {@see https://ramdajs.com/docs/#compose}
 */
describe('function.pipe', () => {
  it('should define R.pipe', () => {
    expect.assertions(1);

    expect(R.pipe).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pipe', () => {
    expect.assertions(1);
  });
});
