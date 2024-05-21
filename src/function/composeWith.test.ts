import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       composeWith
 * Category:   function
 * 
 * Performs right-to-left function composition using transforming function. The last function may have
 * any arity; the remaining functions must be unary. Unlike compose, functions are passed in an array.
 * Note: The result of composeWith is not automatically curried. Transforming function is not used
 * on the last argument.
 * 
 * 
 * ```typescript
 * const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));
 * 
 * composeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2
 * composeWhileNotNil([R.inc, R.prop('age')])({}) //=> undefined
 * ```
 * 
 * {@see https://ramdajs.com/docs/#composeWith}
 * {@see https://ramdajs.com/docs/#compose,
                pipeWith}
 */
describe('function.composeWith', () => {
  it('should define R.composeWith', () => {
    expect.assertions(1);

    expect(R.composeWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.composeWith', () => {
    expect.assertions(1);
  });
});
