import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       isEmpty
 * Category:   logic
 * 
 * Returns true if the given value is its type's empty value; false
 * otherwise.
 * 
 * 
 * ```typescript
 * R.isEmpty([1, 2, 3]);           //=> false
 * R.isEmpty([]);                  //=> true
 * R.isEmpty('');                  //=> true
 * R.isEmpty(null);                //=> false
 * R.isEmpty({});                  //=> true
 * R.isEmpty({length: 0});         //=> false
 * R.isEmpty(Uint8Array.from('')); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#isEmpty}
 * {@see https://ramdajs.com/docs/#empty,
                isNotEmpty}
 */
describe('logic.isEmpty', () => {
  it('should define R.isEmpty', () => {
    expect.assertions(1);

    expect(R.isEmpty).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.isEmpty', () => {
    expect.assertions(1);
  });
});
