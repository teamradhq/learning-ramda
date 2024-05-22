import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       toLower
 * Category:   string
 *
 * The lower case version of a string.
 *
 * {@see https://ramdajs.com/docs/#toLower}
 * {@see https://ramdajs.com/docs/#toUpper}
 */
describe('string.toLower', () => {
  it('should cast to lowercase', () => {
    expect.assertions(1);

    expect(R.toLower('XYZ')).toBe('xyz');
  });
});
