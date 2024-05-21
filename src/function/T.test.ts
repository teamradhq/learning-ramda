import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       T
 * Category:   function
 * 
 * A function that always returns true. Any passed in parameters are ignored.
 * 
 * 
 * ```typescript
 * R.T(); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#T}
 * {@see https://ramdajs.com/docs/#F}
 */
describe('function.T', () => {
  it('should define R.T', () => {
    expect.assertions(1);

    expect(R.T).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.T', () => {
    expect.assertions(1);
  });
});
