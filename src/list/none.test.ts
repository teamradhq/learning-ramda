import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       none
 * Category:   list
 * 
 * Returns true if no elements of the list match the predicate, false
 * otherwise.
 * Dispatches to the all method of the second argument, if present.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const isEven = n => n % 2 === 0;
 * const isOdd = n => n % 2 !== 0;
 * 
 * R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 * R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#none}
 * {@see https://ramdajs.com/docs/#all,
                any}
 */
describe('list.none', () => {
  it('should define R.none', () => {
    expect.assertions(1);

    expect(R.none).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.none', () => {
    expect.assertions(1);
  });
});
