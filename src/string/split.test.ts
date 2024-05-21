import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       split
 * Category:   string
 * 
 * Splits a string into an array of strings based on the given
 * separator.
 * 
 * 
 * ```typescript
 * const pathComponents = R.split('/');
 * R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 * 
 * R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#split}
 * {@see https://ramdajs.com/docs/#join}
 */
describe('string.split', () => {
  it('should define R.split', () => {
    expect.assertions(1);

    expect(R.split).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.split', () => {
    expect.assertions(1);
  });
});
