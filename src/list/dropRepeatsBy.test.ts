import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       dropRepeatsBy
 * Category:   list
 * 
 * Returns a new list without any consecutively repeating elements,
 * based upon the value returned by applying the supplied function to
 * each list element. R.equals is used to determine equality.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * R.dropRepeatsBy(Math.abs, [1, -1, -1, 2, 3, -4, 4, 2, 2]); //=> [1, 2, 3, -4, 2]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#dropRepeatsBy}
 * {@see https://ramdajs.com/docs/#transduce}
 */
describe('list.dropRepeatsBy', () => {
  it('should define R.dropRepeatsBy', () => {
    expect.assertions(1);

    expect(R.dropRepeatsBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.dropRepeatsBy', () => {
    expect.assertions(1);
  });
});
