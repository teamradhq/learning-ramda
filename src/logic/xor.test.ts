import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       xor
 * Category:   logic
 * 
 * Exclusive disjunction logical operation.
 * Returns true if one of the arguments is truthy and the other is falsy.
 * Otherwise, it returns false.
 * 
 * 
 * ```typescript
 * R.xor(true, true); //=> false
 * R.xor(true, false); //=> true
 * R.xor(false, true); //=> true
 * R.xor(false, false); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#xor}
 * {@see https://ramdajs.com/docs/#or,
                and}
 */
describe('logic.xor', () => {
  it('should define R.xor', () => {
    expect.assertions(1);

    expect(R.xor).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.xor', () => {
    expect.assertions(1);
  });
});
