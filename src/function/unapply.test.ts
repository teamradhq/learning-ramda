import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       unapply
 * Category:   function
 * 
 * Takes a function fn, which takes a single array argument, and returns a
 * function which:
 * 
 * takes any number of positional arguments;
 * passes these arguments to fn as an array; and
 * returns the result.
 * 
 * In other words, R.unapply derives a variadic function from a function which
 * takes an array. R.unapply is the inverse of R.apply.
 * 
 * 
 * ```typescript
 * R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#unapply}
 * {@see https://ramdajs.com/docs/#apply}
 */
describe('function.unapply', () => {
  it('should define R.unapply', () => {
    expect.assertions(1);

    expect(R.unapply).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.unapply', () => {
    expect.assertions(1);
  });
});
