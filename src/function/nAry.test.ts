import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       nAry
 * Category:   function
 * 
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly n parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 * 
 * 
 * ```typescript
 * const takesTwoArgs = (a, b) => [a, b];
 * 
 * takesTwoArgs.length; //=> 2
 * takesTwoArgs(1, 2); //=> [1, 2]
 * 
 * const takesOneArg = R.nAry(1, takesTwoArgs);
 * takesOneArg.length; //=> 1
 * // Only `n` arguments are passed to the wrapped function
 * takesOneArg(1, 2); //=> [1, undefined]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#nAry}
 * {@see https://ramdajs.com/docs/#binary,
                unary}
 */
describe('function.nAry', () => {
  it('should define R.nAry', () => {
    expect.assertions(1);

    expect(R.nAry).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.nAry', () => {
    expect.assertions(1);
  });
});
