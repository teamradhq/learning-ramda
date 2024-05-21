import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       or
 * Category:   logic
 * 
 * Returns the first argument if it is truthy, otherwise the second argument.
 * Acts as the boolean or statement if both inputs are Booleans.
 * 
 * 
 * ```typescript
 * R.or(true, true); //=> true
 * R.or(true, false); //=> true
 * R.or(false, true); //=> true
 * R.or(false, false); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#or}
 * {@see https://ramdajs.com/docs/#either,
                and}
 */
describe('logic.or', () => {
  it('should define R.or', () => {
    expect.assertions(1);

    expect(R.or).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.or', () => {
    expect.assertions(1);
  });
});
