import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       dec
 * Category:   math
 *
 * Decrements its argument.
 *
 *
 * ```typescript
 * R.dec(42); //=> 41
 * ```
 *
 * {@see https://ramdajs.com/docs/#dec}
 * {@see https://ramdajs.com/docs/#inc}
 */
describe('math.dec', () => {
  it('should define R.dec', () => {
    expect.assertions(1);

    expect(R.dec).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.dec', () => {
    expect.assertions(1);
  });
});
