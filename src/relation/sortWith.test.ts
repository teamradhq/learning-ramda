import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       sortWith
 * Category:   relation
 * 
 * Sorts a list according to a list of comparators.
 * 
 * 
 * ```typescript
 * const alice = {
 *   name: 'alice',
 *   age: 40
 * };
 * const bob = {
 *   name: 'bob',
 *   age: 30
 * };
 * const clara = {
 *   name: 'clara',
 *   age: 40
 * };
 * const people = [clara, bob, alice];
 * const ageNameSort = R.sortWith([
 *   R.descend(R.prop('age')),
 *   R.ascend(R.prop('name'))
 * ]);
 * ageNameSort(people); //=> [alice, clara, bob]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#sortWith}
 * {@see https://ramdajs.com/docs/#ascend,
                descend}
 */
describe('relation.sortWith', () => {
  it('should define R.sortWith', () => {
    expect.assertions(1);

    expect(R.sortWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.sortWith', () => {
    expect.assertions(1);
  });
});
