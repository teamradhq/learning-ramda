import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       keys
 * Category:   object
 * 
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 * 
 * 
 * ```typescript
 * R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#keys}
 * {@see https://ramdajs.com/docs/#keysIn,
                values,
                toPairs}
 */
describe('object.keys', () => {
  it('should define R.keys', () => {
    expect.assertions(1);

    expect(R.keys).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.keys', () => {
    expect.assertions(1);
  });
});
