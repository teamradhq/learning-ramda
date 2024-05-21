import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       identity
 * Category:   function
 * 
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 * 
 * 
 * ```typescript
 * R.identity(1); //=> 1
 * 
 * const obj = {};
 * R.identity(obj) === obj; //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#identity}
 */
describe('function.identity', () => {
  it('should define R.identity', () => {
    expect.assertions(1);

    expect(R.identity).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.identity', () => {
    expect.assertions(1);
  });
});
