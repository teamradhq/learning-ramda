import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       zipObj
 * Category:   list
 * 
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: zipObj is equivalent to pipe(zip, fromPairs).
 * 
 * 
 * ```typescript
 * R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#zipObj}
 */
describe('list.zipObj', () => {
  it('should define R.zipObj', () => {
    expect.assertions(1);

    expect(R.zipObj).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.zipObj', () => {
    expect.assertions(1);
  });
});
