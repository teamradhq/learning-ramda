import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       takeWhile
 * Category:   list
 * 
 * Returns a new list containing the first n elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns false. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * (value).
 * Dispatches to the takeWhile method of the second argument, if present.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const isNotFour = x => x !== 4;
 * 
 * R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 * 
 * R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#takeWhile}
 * {@see https://ramdajs.com/docs/#dropWhile,
                transduce,
                addIndex}
 */
describe('list.takeWhile', () => {
  it('should define R.takeWhile', () => {
    expect.assertions(1);

    expect(R.takeWhile).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.takeWhile', () => {
    expect.assertions(1);
  });
});
