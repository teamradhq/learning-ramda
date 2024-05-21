import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       clamp
 * Category:   relation
 * 
 * Restricts a number to be within a range.
 * Also works for other ordered types such as Strings and Dates.
 * 
 * 
 * ```typescript
 * R.clamp(1, 10, -5) // => 1
 * R.clamp(1, 10, 15) // => 10
 * R.clamp(1, 10, 4)  // => 4
 * ```
 * 
 * {@see https://ramdajs.com/docs/#clamp}
 */
describe('relation.clamp', () => {
  it('should define R.clamp', () => {
    expect.assertions(1);

    expect(R.clamp).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.clamp', () => {
    expect.assertions(1);
  });
});
