import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       reduce
 * Category:   list
 * 
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 * The iterator function receives two values: (acc, value). It may use
 * R.reduced to shortcut the iteration.
 * The arguments' order of reduceRight's iterator function
 * is (value, acc).
 * Note: R.reduce does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native Array.prototype.reduce method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 * Be cautious of mutating and returning the accumulator. If you reuse it across
 * invocations, it will continue to accumulate onto the same value. The general
 * recommendation is to always return a new value. If you can't do so for
 * performance reasons, then be sure to reinitialize the accumulator on each
 * invocation.
 * Dispatches to the reduce method of the third argument, if present. When
 * doing so, it is up to the user to handle the R.reduced
 * shortcuting, as this is not implemented by reduce.
 * 
 * 
 * ```typescript
 * R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 * //          -               -10
 * //         / \              / \
 * //        -   4           -6   4
 * //       / \              / \
 * //      -   3   ==>     -3   3
 * //     / \              / \
 * //    -   2           -1   2
 * //   / \              / \
 * //  0   1            0   1
 * ```
 * 
 * {@see https://ramdajs.com/docs/#reduce}
 * {@see https://ramdajs.com/docs/#reduced,
                addIndex,
                reduceRight}
 */
describe('list.reduce', () => {
  it('should define R.reduce', () => {
    expect.assertions(1);

    expect(R.reduce).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.reduce', () => {
    expect.assertions(1);
  });
});
