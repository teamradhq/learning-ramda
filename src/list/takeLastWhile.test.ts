import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       takeLastWhile
 * Category:   list
 * 
 * Returns a new list containing the last n elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns false. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * (value).
 * 
 * 
 * ```typescript
 * const isNotOne = x => x !== 1;
 * 
 * R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 * 
 * R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#takeLastWhile}
 * {@see https://ramdajs.com/docs/#dropLastWhile,
                addIndex}
 */
describe('list.takeLastWhile', () => {
  it('should define R.takeLastWhile', () => {
    expect.assertions(1);

    expect(R.takeLastWhile).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.takeLastWhile', () => {
    expect.assertions(1);
  });
});
