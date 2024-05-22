import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       insertAll
 * Category:   list
 *
 * Inserts the sub-list into the list, at the specified index. Note that this is not
 * destructive: it returns a copy of the list with the changes.
 * No lists have been harmed in the application of this function.
 *
 *
 * ```typescript
 * R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 * ```
 *
 * {@see https://ramdajs.com/docs/#insertAll}
 */
describe('list.insertAll', () => {
  it('should define R.insertAll', () => {
    expect.assertions(1);

    expect(R.insertAll).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.insertAll', () => {
    expect.assertions(1);
  });
});
