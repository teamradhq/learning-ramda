import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       binary
 * Category:   function
 * 
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 * 
 * 
 * ```typescript
 * const takesThreeArgs = function(a, b, c) {
 *   return [a, b, c];
 * };
 * takesThreeArgs.length; //=> 3
 * takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 * 
 * const takesTwoArgs = R.binary(takesThreeArgs);
 * takesTwoArgs.length; //=> 2
 * // Only 2 arguments are passed to the wrapped function
 * takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#binary}
 * {@see https://ramdajs.com/docs/#nAry,
                unary}
 */
describe('function.binary', () => {
  it('should define R.binary', () => {
    expect.assertions(1);

    expect(R.binary).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.binary', () => {
    expect.assertions(1);
  });
});
