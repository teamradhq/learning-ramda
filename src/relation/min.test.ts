import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       min
 * Category:   relation
 * 
 * Returns the smaller of its two arguments.
 * 
 * 
 * ```typescript
 * R.min(789, 123); //=> 123
 * R.min('a', 'b'); //=> 'a'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#min}
 * {@see https://ramdajs.com/docs/#minBy,
                max}
 */
describe('relation.min', () => {
  it('should define R.min', () => {
    expect.assertions(1);

    expect(R.min).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.min', () => {
    expect.assertions(1);
  });
});
