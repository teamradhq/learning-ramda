import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       useWith
 * Category:   function
 * 
 * Accepts a function fn and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function fn with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to fn as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 * 
 * 
 * ```typescript
 * R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 * R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 * R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 * R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * ```
 * 
 * {@see https://ramdajs.com/docs/#useWith}
 * {@see https://ramdajs.com/docs/#converge}
 */
describe('function.useWith', () => {
  it('should define R.useWith', () => {
    expect.assertions(1);

    expect(R.useWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.useWith', () => {
    expect.assertions(1);
  });
});
