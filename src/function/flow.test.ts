import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       flow
 * Category:   function
 *
 * Takes the value of an expression and applies it to a function
 * which is the left-to-right serial composition of the functions
 * given in the second argument.
 * The functions in the pipeline should be unary functions.
 * flow is helps to avoid introducing an extra function with named arguments
 * for computing the result of a function pipeline which depends on given initial values.
 * Rather than defining a referential transparent function f = (_x, _y) => R.pipe(g(_x), h(_y), …)
 * which is only later needed once z = f(x, y),
 * the introduction of f, _x and _y can be avoided: z = flow(x, [g, h(y),…]
 * In some libraries this function is named pipe.
 *
 *
 * ```typescript
 * R.flow(9, [Math.sqrt, R.negate, R.inc]), //=> -2
 *
 * const defaultName = 'Jane Doe';
 * const savedName = R.flow(localStorage.get('name'), [R.when(R.isNil(defaultName)), R.match(/(.+)\s/), R.nth(0)]);
 * const givenName = R.flow($givenNameInput.value, [R.trim, R.when(R.isEmpty, R.always(savedName))])
 * ```
 *
 * {@see https://ramdajs.com/docs/#flow}
 * {@see https://ramdajs.com/docs/#pipe}
 */
describe('function.flow', () => {
  it('should define R.flow', () => {
    expect.assertions(1);

    expect(R.flow).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.flow', () => {
    expect.assertions(1);
  });
});
