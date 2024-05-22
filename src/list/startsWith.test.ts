import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       startsWith
 * Category:   list
 *
 * Checks if a list starts with the provided sublist.
 * Similarly, checks if a string starts with the provided substring.
 *
 *
 * ```typescript
 * R.startsWith('a', 'abc')                //=> true
 * R.startsWith('b', 'abc')                //=> false
 * R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 * R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 * ```
 *
 * {@see https://ramdajs.com/docs/#startsWith}
 * {@see https://ramdajs.com/docs/#endsWith}
 */
describe('list.startsWith', () => {
  it('should define R.startsWith', () => {
    expect.assertions(1);

    expect(R.startsWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.startsWith', () => {
    expect.assertions(1);
  });
});
