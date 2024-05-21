import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       curry
 * Category:   function
 * 
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If f is a ternary function and g is R.curry(f), the
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
 * Please note that default parameters don't count towards a function arity
 * and therefore curry won't work well with those.
 * 
 * 
 * ```typescript
 * const addFourNumbers = (a, b, c, d) => a + b + c + d;
 * const curriedAddFourNumbers = R.curry(addFourNumbers);
 * const f = curriedAddFourNumbers(1, 2);
 * const g = f(3);
 * g(4); //=> 10
 * 
 * // R.curry not working well with default parameters
 * const h = R.curry((a, b, c = 2) => a + b + c);
 * h(1)(2)(7); //=> Error! (`3` is not a function!)
 * ```
 * 
 * {@see https://ramdajs.com/docs/#curry}
 * {@see https://ramdajs.com/docs/#curryN,
                partial}
 */
describe('function.curry', () => {
  it('should define R.curry', () => {
    expect.assertions(1);

    expect(R.curry).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.curry', () => {
    expect.assertions(1);
  });
});
