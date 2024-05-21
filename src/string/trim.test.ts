import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       trim
 * Category:   string
 * 
 * Removes (strips) whitespace from both ends of the string.
 * 
 * 
 * ```typescript
 * R.trim('   xyz  '); //=> 'xyz'
 * R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#trim}
 */
describe('string.trim', () => {
  it('should define R.trim', () => {
    expect.assertions(1);

    expect(R.trim).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.trim', () => {
    expect.assertions(1);
  });
});
