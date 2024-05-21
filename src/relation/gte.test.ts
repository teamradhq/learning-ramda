import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       gte
 * Category:   relation
 * 
 * Returns true if the first argument is greater than or equal to the second;
 * false otherwise.
 * 
 * 
 * ```typescript
 * R.gte(2, 1); //=> true
 * R.gte(2, 2); //=> true
 * R.gte(2, 3); //=> false
 * R.gte('a', 'z'); //=> false
 * R.gte('z', 'a'); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#gte}
 * {@see https://ramdajs.com/docs/#lte}
 */
describe('relation.gte', () => {
  it('should define R.gte', () => {
    expect.assertions(1);

    expect(R.gte).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.gte', () => {
    expect.assertions(1);
  });
});
