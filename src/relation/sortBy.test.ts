import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       sortBy
 * Category:   relation
 * 
 * Sorts the list according to the supplied function.
 * 
 * 
 * ```typescript
 * const sortByFirstItem = R.sortBy(R.prop(0));
 * const pairs = [[-1, 1], [-2, 2], [-3, 3]];
 * sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 * 
 * const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 * const alice = {
 *   name: 'ALICE',
 *   age: 101
 * };
 * const bob = {
 *   name: 'Bob',
 *   age: -10
 * };
 * const clara = {
 *   name: 'clara',
 *   age: 314.159
 * };
 * const people = [clara, bob, alice];
 * sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#sortBy}
 */
describe('relation.sortBy', () => {
  it('should define R.sortBy', () => {
    expect.assertions(1);

    expect(R.sortBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.sortBy', () => {
    expect.assertions(1);
  });
});
