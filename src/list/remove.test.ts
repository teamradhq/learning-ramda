import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       remove
 * Category:   list
 *
 * Removes the sub-list of list starting at index start and containing
 * count elements. Note that this is not destructive: it returns a copy of
 * the list with the changes.
 * No lists have been harmed in the application of this function.
 *
 *
 * ```typescript
 * R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 * ```
 *
 * {@see https://ramdajs.com/docs/#remove}
 * {@see https://ramdajs.com/docs/#without}
 */
describe('list.remove', () => {
  it('should define R.remove', () => {
    expect.assertions(1);

    expect(R.remove).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.remove', () => {
    expect.assertions(1);
  });
});
