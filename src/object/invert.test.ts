import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       invert
 * Category:   object
 * 
 * Same as R.invertObj, however this accounts for objects with
 * duplicate values by putting the values into an array.
 * 
 * 
 * ```typescript
 * const raceResultsByFirstName = {
 *   first: 'alice',
 *   second: 'jake',
 *   third: 'alice',
 * };
 * R.invert(raceResultsByFirstName);
 * //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 * ```
 * 
 * {@see https://ramdajs.com/docs/#invert}
 * {@see https://ramdajs.com/docs/#invertObj}
 */
describe('object.invert', () => {
  it('should define R.invert', () => {
    expect.assertions(1);

    expect(R.invert).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.invert', () => {
    expect.assertions(1);
  });
});
