import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       addIndex
 * Category:   function
 *
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 * This would turn, for instance, R.map function into one that
 * more closely resembles Array.prototype.map. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 *
 * ```typescript
 * const mapIndexed = R.addIndex(R.map);
 * mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 * //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 * ```
 *
 * {@see https://ramdajs.com/docs/#addIndex}
 */
describe('function.addIndex', () => {
  it('should define R.addIndex', () => {
    expect.assertions(1);

    expect(R.addIndex).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.addIndex', () => {
    expect.assertions(1);
  });
});
