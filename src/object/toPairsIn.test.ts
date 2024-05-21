import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       toPairsIn
 * Category:   object
 * 
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 * 
 * 
 * ```typescript
 * const F = function() { this.x = 'X'; };
 * F.prototype.y = 'Y';
 * const f = new F();
 * R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#toPairsIn}
 */
describe('object.toPairsIn', () => {
  it('should define R.toPairsIn', () => {
    expect.assertions(1);

    expect(R.toPairsIn).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.toPairsIn', () => {
    expect.assertions(1);
  });
});
