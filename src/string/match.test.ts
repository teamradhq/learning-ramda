import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       match
 * Category:   string
 *
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * String.prototype.match  which returns null when there are no matches.
 *
 * {@see https://ramdajs.com/docs/#match}
 * {@see https://ramdajs.com/docs/#test}
 */
describe('string.match', () => {
  it('should match *a*a*a', () => {
    expect.assertions(1);

    expect(R.match(/([a-z]a)/g, 'bananas')).toStrictEqual(['ba', 'na', 'na']);
  });

  it('should provide empty match array', () => {
    expect.assertions(1);

    expect(R.match(/a/, 'b')).toStrictEqual([]);
  });

  it('raise a TypeError if no match method', () => {
    expect.assertions(1);

    const shouldThrow = () => R.match(/a/, null as unknown as string);

    expect(shouldThrow).toThrow(TypeError);
  });
});
