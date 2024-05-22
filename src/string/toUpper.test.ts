import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       toUpper
 * Category:   string
 *
 * The upper case version of a string.
 *
 * {@see https://ramdajs.com/docs/#toUpper}
 * {@see https://ramdajs.com/docs/#toLower}
 */
describe('string.toUpper', () => {
  it('should transform to uppercase', () => {
    expect.assertions(1);

    expect(R.toUpper('abc')).toBe('ABC');
  });
});
