import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       inc
 * Category:   math
 *
 * Increments its argument.
 *
 *
 * ```typescript
 * R.inc(42); //=> 43
 * ```
 *
 * {@see https://ramdajs.com/docs/#inc}
 * {@see https://ramdajs.com/docs/#dec}
 */
describe('math.inc', () => {
  it('should define R.inc', () => {
    expect.assertions(1);

    expect(R.inc).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.inc', () => {
    expect.assertions(1);
  });
});
