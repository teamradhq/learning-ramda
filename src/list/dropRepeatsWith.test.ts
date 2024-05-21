import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       dropRepeatsWith
 * Category:   list
 * 
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 * R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#dropRepeatsWith}
 * {@see https://ramdajs.com/docs/#transduce}
 */
describe('list.dropRepeatsWith', () => {
  it('should define R.dropRepeatsWith', () => {
    expect.assertions(1);

    expect(R.dropRepeatsWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.dropRepeatsWith', () => {
    expect.assertions(1);
  });
});
