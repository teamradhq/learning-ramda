import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       nth
 * Category:   list
 * 
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 * 
 * 
 * ```typescript
 * const list = ['foo', 'bar', 'baz', 'quux'];
 * R.nth(1, list); //=> 'bar'
 * R.nth(-1, list); //=> 'quux'
 * R.nth(-99, list); //=> undefined
 * 
 * R.nth(2, 'abc'); //=> 'c'
 * R.nth(3, 'abc'); //=> ''
 * ```
 * 
 * {@see https://ramdajs.com/docs/#nth}
 */
describe('list.nth', () => {
  it('should define R.nth', () => {
    expect.assertions(1);

    expect(R.nth).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.nth', () => {
    expect.assertions(1);
  });
});
