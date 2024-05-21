import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       isNotEmpty
 * Category:   logic
 * 
 * Returns false if the given value is its type's empty value; true
 * otherwise.
 * 
 * 
 * ```typescript
 * R.isNotEmpty([1, 2, 3]);           //=> true
 * R.isNotEmpty([]);                  //=> false
 * R.isNotEmpty('');                  //=> false
 * R.isNotEmpty(null);                //=> true
 * R.isNotEmpty({});                  //=> false
 * R.isNotEmpty({length: 0});         //=> true
 * R.isNotEmpty(Uint8Array.from('')); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#isNotEmpty}
 * {@see https://ramdajs.com/docs/#empty,
                isEmpty}
 */
describe('logic.isNotEmpty', () => {
  it('should define R.isNotEmpty', () => {
    expect.assertions(1);

    expect(R.isNotEmpty).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.isNotEmpty', () => {
    expect.assertions(1);
  });
});
