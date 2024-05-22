import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       split
 * Category:   string
 *
 * Splits a string into an array of strings based on the given separator.
 *
 * {@see https://ramdajs.com/docs/#split}
 * {@see https://ramdajs.com/docs/#join}
 */
describe('string.split', () => {
  it('should split path components', () => {
    expect.assertions(1);

    const pathComponents = R.split('/');

    expect(R.tail(pathComponents('/usr/local/bin/node'))).toStrictEqual([
      'usr',
      'local',
      'bin',
      'node',
    ]);
  });

  it('should split dots', () => {
    expect.assertions(1);

    expect(R.split('.', 'a.b.c.xyz.d')).toStrictEqual(['a', 'b', 'c', 'xyz', 'd']);
  });
});
