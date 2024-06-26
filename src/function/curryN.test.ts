import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       curryN
 * Category:   function
 *
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If g is R.curryN(3, f), the
 * following are equivalent:
 *
 * g(1)(2)(3)
 * g(1)(2, 3)
 * g(1, 2)(3)
 * g(1, 2, 3)
 *
 * Secondly, the special placeholder value R.__ may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If g is as above and _ is R.__,
 * the following are equivalent:
 *
 * g(1, 2, 3)
 * g(_, 2, 3)(1)
 * g(_, _, 3)(1)(2)
 * g(_, _, 3)(1, 2)
 * g(_, 2)(1)(3)
 * g(_, 2)(1, 3)
 * g(_, 2)(_, 3)(1)
 *
 *
 *
 * ```typescript
 * const sumArgs = (...args) => R.sum(args);
 *
 * const curriedAddFourNumbers = R.curryN(4, sumArgs);
 * const f = curriedAddFourNumbers(1, 2);
 * const g = f(3);
 * g(4); //=> 10
 * ```
 *
 * {@see https://ramdajs.com/docs/#curryN}
 * {@see https://ramdajs.com/docs/#curry}
 */
describe('function.curryN', () => {
  it('should define R.curryN', () => {
    expect.assertions(1);

    expect(R.curryN).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.curryN', () => {
    expect.assertions(1);
  });
});
