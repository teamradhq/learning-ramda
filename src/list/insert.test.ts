import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       insert
 * Category:   list
 * 
 * Inserts the supplied element into the list, at the specified index. Note that
 * this is not destructive: it returns a copy of the list with the changes.
 * No lists have been harmed in the application of this function.
 * 
 * 
 * ```typescript
 * R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#insert}
 */
describe('list.insert', () => {
  it('should define R.insert', () => {
    expect.assertions(1);

    expect(R.insert).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.insert', () => {
    expect.assertions(1);
  });
});
