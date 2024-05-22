import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       F
 * Category:   function
 *
 * A function that always returns false. Any passed in parameters are ignored.
 *
 *
 * ```typescript
 * R.F(); //=> false
 * ```
 *
 * {@see https://ramdajs.com/docs/#F}
 * {@see https://ramdajs.com/docs/#T}
 */
describe('function.F', () => {
  it('should define R.F', () => {
    expect.assertions(1);

    expect(R.F).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.F', () => {
    expect.assertions(1);
  });
});
