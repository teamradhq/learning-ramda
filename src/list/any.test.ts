import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       any
 * Category:   list
 * 
 * Returns true if at least one of the elements of the list match the predicate,
 * false otherwise.
 * Dispatches to the any method of the second argument, if present.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const lessThan0 = R.flip(R.lt)(0);
 * const lessThan2 = R.flip(R.lt)(2);
 * R.any(lessThan0)([1, 2]); //=> false
 * R.any(lessThan2)([1, 2]); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#any}
 * {@see https://ramdajs.com/docs/#all,
                none,
                transduce}
 */
describe('list.any', () => {
  it('should define R.any', () => {
    expect.assertions(1);

    expect(R.any).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.any', () => {
    expect.assertions(1);
  });
});
