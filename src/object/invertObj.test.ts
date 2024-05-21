import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       invertObj
 * Category:   object
 * 
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 * 
 * 
 * ```typescript
 * const raceResults = {
 *   first: 'alice',
 *   second: 'jake'
 * };
 * R.invertObj(raceResults);
 * //=> { 'alice': 'first', 'jake':'second' }
 * 
 * // Alternatively:
 * const raceResults = ['alice', 'jake'];
 * R.invertObj(raceResults);
 * //=> { 'alice': '0', 'jake':'1' }
 * ```
 * 
 * {@see https://ramdajs.com/docs/#invertObj}
 * {@see https://ramdajs.com/docs/#invert}
 */
describe('object.invertObj', () => {
  it('should define R.invertObj', () => {
    expect.assertions(1);

    expect(R.invertObj).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.invertObj', () => {
    expect.assertions(1);
  });
});
