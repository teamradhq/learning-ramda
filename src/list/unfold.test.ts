import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       unfold
 * Category:   list
 * 
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 * The iterator function receives one argument: (seed).
 * 
 * 
 * ```typescript
 * const f = n => n > 50 ? false : [-n, n + 10];
 * R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#unfold}
 */
describe('list.unfold', () => {
  it('should define R.unfold', () => {
    expect.assertions(1);

    expect(R.unfold).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.unfold', () => {
    expect.assertions(1);
  });
});
