import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       reduceRight
 * Category:   list
 * 
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 * Similar to reduce, except moves through the input list from the
 * right to the left.
 * The iterator function receives two values: (value, acc), while the arguments'
 * order of reduce's iterator function is (acc, value). reduceRight may use reduced
 * to short circuit the iteration.
 * Note: R.reduceRight does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native Array.prototype.reduceRight method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 * Be cautious of mutating and returning the accumulator. If you reuse it across
 * invocations, it will continue to accumulate onto the same value. The general
 * recommendation is to always return a new value. If you can't do so for
 * performance reasons, then be sure to reinitialize the accumulator on each
 * invocation.
 * 
 * 
 * ```typescript
 * R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 * //    -               -2
 * //   / \              / \
 * //  1   -            1   3
 * //     / \              / \
 * //    2   -     ==>    2  -1
 * //       / \              / \
 * //      3   -            3   4
 * //         / \              / \
 * //        4   0            4   0
 * ```
 * 
 * {@see https://ramdajs.com/docs/#reduceRight}
 * {@see https://ramdajs.com/docs/#reduce,
                addIndex,
                reduced}
 */
describe('list.reduceRight', () => {
  it('should define R.reduceRight', () => {
    expect.assertions(1);

    expect(R.reduceRight).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.reduceRight', () => {
    expect.assertions(1);
  });
});
