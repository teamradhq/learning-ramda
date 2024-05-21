import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       nthArg
 * Category:   function
 * 
 * Returns a function which returns its nth argument.
 * 
 * 
 * ```typescript
 * R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 * R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#nthArg}
 */
describe('function.nthArg', () => {
  it('should define R.nthArg', () => {
    expect.assertions(1);

    expect(R.nthArg).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.nthArg', () => {
    expect.assertions(1);
  });
});
