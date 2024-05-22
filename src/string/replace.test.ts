import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       replace
 * Category:   string
 *
 * Replace a substring or regex match in a string with a replacement.
 * The first two parameters correspond to the parameters of the
 * String.prototype.replace() function, so the second parameter can also be a
 * function.
 *
 * {@see https://ramdajs.com/docs/#replace}
 */
describe('string.replace', () => {
  it('should replace a foo', () => {
    expect.assertions(2);

    expect(R.replace('foo', 'bar', 'foo foo foo')).toBe('bar foo foo');
    expect(R.replace(/foo/, 'bar', 'foo foo foo')).toBe('bar foo foo');
  });

  it('should replace all foos', () => {
    expect.assertions(1);

    expect(R.replace(/foo/g, 'bar', 'foo foo foo')).toBe('bar bar bar');
  });
});
