import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       toPairs
 * Category:   object
 * 
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 * 
 * 
 * ```typescript
 * R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#toPairs}
 * {@see https://ramdajs.com/docs/#fromPairs,
                keys,
                values}
 */
describe('object.toPairs', () => {
  it('should define R.toPairs', () => {
    expect.assertions(1);

    expect(R.toPairs).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.toPairs', () => {
    expect.assertions(1);
  });
});
