import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       and
 * Category:   logic
 * 
 * Returns the first argument if it is falsy, otherwise the second argument.
 * Acts as the boolean and statement if both inputs are Booleans.
 * 
 * 
 * ```typescript
 * R.and(true, true); //=> true
 * R.and(true, false); //=> false
 * R.and(false, true); //=> false
 * R.and(false, false); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#and}
 * {@see https://ramdajs.com/docs/#both,
                or}
 */
describe('logic.and', () => {
  it('should define R.and', () => {
    expect.assertions(1);

    expect(R.and).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.and', () => {
    expect.assertions(1);
  });
});
