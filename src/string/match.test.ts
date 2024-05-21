import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       match
 * Category:   string
 * 
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * String.prototype.match
 * which returns null when there are no matches.
 * 
 * 
 * ```typescript
 * R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 * R.match(/a/, 'b'); //=> []
 * R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 * ```
 * 
 * {@see https://ramdajs.com/docs/#match}
 * {@see https://ramdajs.com/docs/#test}
 */
describe('string.match', () => {
  it('should define R.match', () => {
    expect.assertions(1);

    expect(R.match).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.match', () => {
    expect.assertions(1);
  });
});
