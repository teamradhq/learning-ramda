import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       adjust
 * Category:   list
 *
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 *
 * ```typescript
 * R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
 * R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
 * ```
 *
 * {@see https://ramdajs.com/docs/#adjust}
 * {@see https://ramdajs.com/docs/#update}
 */
describe('list.adjust', () => {
  it('should define R.adjust', () => {
    expect.assertions(1);

    expect(R.adjust).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.adjust', () => {
    expect.assertions(1);
  });
});
