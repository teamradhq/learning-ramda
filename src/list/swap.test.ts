import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       swap
 * Category:   list
 * 
 * Swap an item, at index indexA with another item, at index indexB, in an object or a list of elements.
 * A new result will be created containing the new elements order.
 * 
 * 
 * ```typescript
 * R.swap(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['c', 'b', 'a', 'd', 'e', 'f']
 * R.swap(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'b', 'c', 'd', 'e', 'a']
 * R.swap('a', 'b', {a: 1, b: 2}); //=> {a: 2, b: 1}
 * R.swap(0, 2, 'foo'); //=> 'oof'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#swap}
 */
describe('list.swap', () => {
  it('should define R.swap', () => {
    expect.assertions(1);

    expect(R.swap).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.swap', () => {
    expect.assertions(1);
  });
});
