import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       pipeWith
 * Category:   function
 * 
 * Performs left-to-right function composition using transforming function. The first function may have
 * any arity; the remaining functions must be unary.
 * Note: The result of pipeWith is not automatically curried. Transforming function is not used on the
 * first argument.
 * 
 * 
 * ```typescript
 * const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
 * const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])
 * 
 * f(3, 4); // -(3^4) + 1
 * ```
 * 
 * {@see https://ramdajs.com/docs/#pipeWith}
 * {@see https://ramdajs.com/docs/#composeWith,
                pipe}
 */
describe('function.pipeWith', () => {
  it('should define R.pipeWith', () => {
    expect.assertions(1);

    expect(R.pipeWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pipeWith', () => {
    expect.assertions(1);
  });
});
