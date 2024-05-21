import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       thunkify
 * Category:   function
 * 
 * Creates a thunk out of a function. A thunk delays a calculation until
 * its result is needed, providing lazy evaluation of arguments.
 * 
 * 
 * ```typescript
 * R.thunkify(R.identity)(42)(); //=> 42
 * R.thunkify((a, b) => a + b)(25, 17)(); //=> 42
 * ```
 * 
 * {@see https://ramdajs.com/docs/#thunkify}
 * {@see https://ramdajs.com/docs/#partial,
                partialRight}
 */
describe('function.thunkify', () => {
  it('should define R.thunkify', () => {
    expect.assertions(1);

    expect(R.thunkify).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.thunkify', () => {
    expect.assertions(1);
  });
});
