import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       times
 * Category:   list
 * 
 * Calls an input function n times, returning an array containing the results
 * of those function calls.
 * fn is passed one argument: The current value of n, which begins at 0
 * and is gradually incremented to n - 1.
 * 
 * 
 * ```typescript
 * R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#times}
 * {@see https://ramdajs.com/docs/#repeat}
 */
describe('list.times', () => {
  it('should define R.times', () => {
    expect.assertions(1);

    expect(R.times).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.times', () => {
    expect.assertions(1);
  });
});
