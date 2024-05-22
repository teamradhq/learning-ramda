import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       slice
 * Category:   list
 *
 * Returns the elements of the given list or string (or object with a slice
 * method) from fromIndex (inclusive) to toIndex (exclusive).
 * Dispatches to the slice method of the third argument, if present.
 *
 *
 * ```typescript
 * R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 * R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 * R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 * R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 * R.slice(0, 3, 'ramda');                     //=> 'ram'
 * ```
 *
 * {@see https://ramdajs.com/docs/#slice}
 */
describe('list.slice', () => {
  it('should define R.slice', () => {
    expect.assertions(1);

    expect(R.slice).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.slice', () => {
    expect.assertions(1);
  });
});
