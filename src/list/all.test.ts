import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       all
 * Category:   list
 * 
 * Returns true if all elements of the list match the predicate, false if
 * there are any that don't.
 * Dispatches to the all method of the second argument, if present.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const equals3 = R.equals(3);
 * R.all(equals3)([3, 3, 3, 3]); //=> true
 * R.all(equals3)([3, 3, 1, 3]); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#all}
 * {@see https://ramdajs.com/docs/#any,
                none,
                transduce}
 */
describe('list.all', () => {
  it('should define R.all', () => {
    expect.assertions(1);

    expect(R.all).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.all', () => {
    expect.assertions(1);
  });
});
