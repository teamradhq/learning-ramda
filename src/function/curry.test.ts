import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       curry
 * Category:   function
 *
 * Returns a curried equivalent of the provided function. The curried function has two unusual
 * capabilities. First, its arguments needn't be provided one at a time. If f is a ternary
 * function and g is R.curry(f), the following are equivalent:
 *
 * g(1)(2)(3)
 * g(1)(2, 3)
 * g(1, 2)(3)
 * g(1, 2, 3)
 *
 * Secondly, the special placeholder value R.__ may be used to specify "gaps", allowing
 * partial application of any combination of arguments, regardless of their positions.
 * If g is as above and _ is R.__, the following are equivalent:
 *
 * g(1, 2, 3)
 * g(_, 2, 3)(1)
 * g(_, _, 3)(1)(2)
 * g(_, _, 3)(1, 2)
 * g(_, 2)(1)(3)
 * g(_, 2)(1, 3)
 * g(_, 2)(_, 3)(1)
 *
 * Please note that default parameters don't count towards a function arity and therefore curry
 * won't work well with those.
 *
 * {@see https://ramdajs.com/docs/#curry}
 * {@see https://ramdajs.com/docs/#curryN}
 * {@see https://ramdajs.com/docs/#partial}
 */
describe('function.curry', () => {
  it('should curry the function', () => {
    expect.assertions(3);

    const sumFour = (a: number, b: number, c: number, d: number) => a + b + c + d;
    const curried = R.curry(sumFour);
    const f = curried(1, 2);
    const g = f(3);

    expect(curried(1)(2)(3)(4)).toBe(sumFour(1, 2, 3, 4));
    expect(f(3)(4)).toBe(10);
    expect(g(4)).toBe(10);
  });
});
