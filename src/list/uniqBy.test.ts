import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       uniqBy
 * Category:   list
 * 
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. R.equals is used for comparison.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#uniqBy}
 */
describe('list.uniqBy', () => {
  it('should define R.uniqBy', () => {
    expect.assertions(1);

    expect(R.uniqBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.uniqBy', () => {
    expect.assertions(1);
  });
});
