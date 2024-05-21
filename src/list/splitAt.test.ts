import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       splitAt
 * Category:   list
 * 
 * Splits a given list or string at a given index.
 * 
 * 
 * ```typescript
 * R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 * R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 * R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#splitAt}
 */
describe('list.splitAt', () => {
  it('should define R.splitAt', () => {
    expect.assertions(1);

    expect(R.splitAt).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.splitAt', () => {
    expect.assertions(1);
  });
});
