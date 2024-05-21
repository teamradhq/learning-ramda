import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       zipWith
 * Category:   list
 * 
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 * 
 * 
 * ```typescript
 * const f = (x, y) => {
 *   // ...
 * };
 * R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 * //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#zipWith}
 */
describe('list.zipWith', () => {
  it('should define R.zipWith', () => {
    expect.assertions(1);

    expect(R.zipWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.zipWith', () => {
    expect.assertions(1);
  });
});
