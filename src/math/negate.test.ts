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
  it('should define R.negate', () => {
    expect.assertions(1);

    expect(R.negate).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.negate', () => {
    expect.assertions(1);
  });
});
