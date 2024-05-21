import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       applyTo
 * Category:   function
 * 
 * Takes a value and applies a function to it.
 * This function is also known as the thrush combinator.
 * 
 * 
 * ```typescript
 * const t42 = R.applyTo(42);
 * t42(R.identity); //=> 42
 * t42(R.add(1)); //=> 43
 * ```
 * 
 * {@see https://ramdajs.com/docs/#applyTo}
 */
describe('function.applyTo', () => {
  it('should define R.applyTo', () => {
    expect.assertions(1);

    expect(R.applyTo).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.applyTo', () => {
    expect.assertions(1);
  });
});
