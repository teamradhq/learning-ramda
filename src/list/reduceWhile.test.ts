import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       reduceWhile
 * Category:   list
 * 
 * Like reduce, reduceWhile returns a single item by iterating
 * through the list, successively calling the iterator function. reduceWhile
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns false, it "short-circuits" the iteration and returns the current
 * value of the accumulator. reduceWhile may alternatively be short-circuited
 * via reduced.
 * 
 * 
 * ```typescript
 * const isOdd = (acc, x) => x % 2 !== 0;
 * const xs = [1, 3, 5, 60, 777, 800];
 * R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 * 
 * const ys = [2, 4, 6]
 * R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 * ```
 * 
 * {@see https://ramdajs.com/docs/#reduceWhile}
 * {@see https://ramdajs.com/docs/#reduce,
                reduced}
 */
describe('list.reduceWhile', () => {
  it('should define R.reduceWhile', () => {
    expect.assertions(1);

    expect(R.reduceWhile).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.reduceWhile', () => {
    expect.assertions(1);
  });
});
