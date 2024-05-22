import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       update
 * Category:   list
 *
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 *
 * ```typescript
 * R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
 * R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
 * ```
 *
 * {@see https://ramdajs.com/docs/#update}
 * {@see https://ramdajs.com/docs/#adjust}
 */
describe('list.update', () => {
  it('should define R.update', () => {
    expect.assertions(1);

    expect(R.update).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.update', () => {
    expect.assertions(1);
  });
});
