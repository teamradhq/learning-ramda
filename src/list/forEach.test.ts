import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       forEach
 * Category:   list
 *
 * Iterate over an input list, calling a provided function fn for each
 * element in the list.
 * fn receives one argument: (value).
 * Note: R.forEach does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native Array.prototype.forEach method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 * Also note that, unlike Array.prototype.forEach, Ramda's forEach returns
 * the original array. In some libraries this function is named each.
 * Dispatches to the forEach method of the second argument, if present.
 *
 *
 * ```typescript
 * const printXPlusFive = x => console.log(x + 5);
 * R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 * // logs 6
 * // logs 7
 * // logs 8
 * ```
 *
 * {@see https://ramdajs.com/docs/#forEach}
 * {@see https://ramdajs.com/docs/#addIndex}
 */
describe('list.forEach', () => {
  it('should define R.forEach', () => {
    expect.assertions(1);

    expect(R.forEach).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.forEach', () => {
    expect.assertions(1);
  });
});
