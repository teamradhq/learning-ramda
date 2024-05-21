import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       unary
 * Category:   function
 * 
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 * 
 * 
 * ```typescript
 * const takesTwoArgs = function(a, b) {
 *   return [a, b];
 * };
 * takesTwoArgs.length; //=> 2
 * takesTwoArgs(1, 2); //=> [1, 2]
 * 
 * const takesOneArg = R.unary(takesTwoArgs);
 * takesOneArg.length; //=> 1
 * // Only 1 argument is passed to the wrapped function
 * takesOneArg(1, 2); //=> [1, undefined]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#unary}
 * {@see https://ramdajs.com/docs/#binary,
                nAry}
 */
describe('function.unary', () => {
  it('should define R.unary', () => {
    expect.assertions(1);

    expect(R.unary).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.unary', () => {
    expect.assertions(1);
  });
});
