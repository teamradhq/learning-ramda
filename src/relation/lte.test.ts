import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       lte
 * Category:   relation
 * 
 * Returns true if the first argument is less than or equal to the second;
 * false otherwise.
 * 
 * 
 * ```typescript
 * R.lte(2, 1); //=> false
 * R.lte(2, 2); //=> true
 * R.lte(2, 3); //=> true
 * R.lte('a', 'z'); //=> true
 * R.lte('z', 'a'); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#lte}
 * {@see https://ramdajs.com/docs/#gte}
 */
describe('relation.lte', () => {
  it('should define R.lte', () => {
    expect.assertions(1);

    expect(R.lte).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.lte', () => {
    expect.assertions(1);
  });
});
