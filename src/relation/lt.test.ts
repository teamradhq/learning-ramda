import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       lt
 * Category:   relation
 * 
 * Returns true if the first argument is less than the second; false
 * otherwise.
 * 
 * 
 * ```typescript
 * R.lt(2, 1); //=> false
 * R.lt(2, 2); //=> false
 * R.lt(2, 3); //=> true
 * R.lt('a', 'z'); //=> true
 * R.lt('z', 'a'); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#lt}
 * {@see https://ramdajs.com/docs/#gt}
 */
describe('relation.lt', () => {
  it('should define R.lt', () => {
    expect.assertions(1);

    expect(R.lt).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.lt', () => {
    expect.assertions(1);
  });
});
