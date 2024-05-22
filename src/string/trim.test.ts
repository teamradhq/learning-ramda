import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       trim
 * Category:   string
 *
 * Removes (strips) whitespace from both ends of the string.
 *
 * {@see https://ramdajs.com/docs/#trim}
 */
describe('string.trim', () => {
  it('should trim the string', () => {
    expect.assertions(1);

    expect(R.trim('   xyz  ')).toBe('xyz');
  });

  it('should trim all the strings', () => {
    expect.assertions(1);

    expect(R.map(R.trim, R.split(',', 'x, y, z'))).toStrictEqual(['x', 'y', 'z']);
  });
});
