import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       complement
 * Category:   logic
 *
 * Takes a function f and returns a function g such that if called with the same arguments
 * when f returns a "truthy" value, g returns false and when f returns a "falsy" value g returns true.
 * R.complement may be applied to any functor
 *
 *
 * ```typescript
 * const isNotNil = R.complement(R.isNil);
 * R.isNil(null); //=> true
 * isNotNil(null); //=> false
 * R.isNil(7); //=> false
 * isNotNil(7); //=> true
 * ```
 *
 * {@see https://ramdajs.com/docs/#complement}
 * {@see https://ramdajs.com/docs/#not}
 */
describe('logic.complement', () => {
  it('should define R.complement', () => {
    expect.assertions(1);

    expect(R.complement).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.complement', () => {
    expect.assertions(1);
  });
});
