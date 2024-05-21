import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       always
 * Category:   function
 * 
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 * This function is known as const, constant, or K (for K combinator) in
 * other languages and libraries.
 * 
 * 
 * ```typescript
 * const t = R.always('Tee');
 * t(); //=> 'Tee'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#always}
 */
describe('function.always', () => {
  it('should define R.always', () => {
    expect.assertions(1);

    expect(R.always).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.always', () => {
    expect.assertions(1);
  });
});
