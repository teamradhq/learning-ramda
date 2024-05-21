import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       not
 * Category:   logic
 * 
 * A function that returns the ! of its argument. It will return true when
 * passed false-y value, and false when passed a truth-y one.
 * 
 * 
 * ```typescript
 * R.not(true); //=> false
 * R.not(false); //=> true
 * R.not(0); //=> true
 * R.not(1); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#not}
 * {@see https://ramdajs.com/docs/#complement}
 */
describe('logic.not', () => {
  it('should define R.not', () => {
    expect.assertions(1);

    expect(R.not).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.not', () => {
    expect.assertions(1);
  });
});
