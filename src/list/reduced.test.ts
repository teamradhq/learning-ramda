import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       reduced
 * Category:   list
 * 
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 * This optimization is available to the below functions:
 * 
 * reduce
 * reduceWhile
 * reduceBy
 * reduceRight
 * transduce
 * 
 * 
 * 
 * ```typescript
 * R.reduce(
 *  (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *  [],
 *  [1, 2, 3, 4, 5]) // [1, 2, 3]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#reduced}
 * {@see https://ramdajs.com/docs/#reduce,
                reduceWhile,
                reduceBy,
                reduceRight,
                transduce}
 */
describe('list.reduced', () => {
  it('should define R.reduced', () => {
    expect.assertions(1);

    expect(R.reduced).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.reduced', () => {
    expect.assertions(1);
  });
});
