import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       valuesIn
 * Category:   object
 * 
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 * 
 * 
 * ```typescript
 * const F = function() { this.x = 'X'; };
 * F.prototype.y = 'Y';
 * const f = new F();
 * R.valuesIn(f); //=> ['X', 'Y']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#valuesIn}
 * {@see https://ramdajs.com/docs/#values,
                keysIn}
 */
describe('object.valuesIn', () => {
  it('should define R.valuesIn', () => {
    expect.assertions(1);

    expect(R.valuesIn).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.valuesIn', () => {
    expect.assertions(1);
  });
});
