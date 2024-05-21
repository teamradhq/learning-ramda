import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       tap
 * Category:   function
 * 
 * Runs the given function with the supplied object, then returns the object.
 * Acts as a transducer if a transformer is given as second parameter.
 * 
 * 
 * ```typescript
 * const sayX = x => console.log('x is ' + x);
 * R.tap(sayX, 100); //=> 100
 * // logs 'x is 100'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#tap}
 */
describe('function.tap', () => {
  it('should define R.tap', () => {
    expect.assertions(1);

    expect(R.tap).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.tap', () => {
    expect.assertions(1);
  });
});
