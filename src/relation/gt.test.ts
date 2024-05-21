import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       gt
 * Category:   relation
 * 
 * Returns true if the first argument is greater than the second; false
 * otherwise.
 * 
 * 
 * ```typescript
 * R.gt(2, 1); //=> true
 * R.gt(2, 2); //=> false
 * R.gt(2, 3); //=> false
 * R.gt('a', 'z'); //=> false
 * R.gt('z', 'a'); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#gt}
 * {@see https://ramdajs.com/docs/#lt}
 */
describe('relation.gt', () => {
  it('should define R.gt', () => {
    expect.assertions(1);

    expect(R.gt).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.gt', () => {
    expect.assertions(1);
  });
});
