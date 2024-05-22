import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       on
 * Category:   function
 *
 * Takes a binary function f, a unary function g, and two values.
 * Applies g to each value, then applies the result of each to f.
 * Also known as the P combinator.
 *
 *
 * ```typescript
 * const eqBy = R.on((a, b) => a === b);
 * eqBy(R.prop('a'), {b:0, a:1}, {a:1}) //=> true;
 *
 * const containsInsensitive = R.on(R.includes, R.toLower);
 * containsInsensitive('o', 'FOO'); //=> true
 * ```
 *
 * {@see https://ramdajs.com/docs/#on}
 */
describe('function.on', () => {
  it('should define R.on', () => {
    expect.assertions(1);

    expect(R.on).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.on', () => {
    expect.assertions(1);
  });
});
