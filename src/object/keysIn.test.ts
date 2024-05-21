import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       keysIn
 * Category:   object
 * 
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 * 
 * 
 * ```typescript
 * const F = function() { this.x = 'X'; };
 * F.prototype.y = 'Y';
 * const f = new F();
 * R.keysIn(f); //=> ['x', 'y']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#keysIn}
 * {@see https://ramdajs.com/docs/#keys,
                valuesIn}
 */
describe('object.keysIn', () => {
  it('should define R.keysIn', () => {
    expect.assertions(1);

    expect(R.keysIn).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.keysIn', () => {
    expect.assertions(1);
  });
});
