import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       eqProps
 * Category:   object
 *
 * Reports whether two objects have the same value, in R.equals
 * terms, for the specified property. Useful as a curried predicate.
 *
 *
 * ```typescript
 * const o1 = { a: 1, b: 2, c: 3, d: 4 };
 * const o2 = { a: 10, b: 20, c: 3, d: 40 };
 * R.eqProps('a', o1, o2); //=> false
 * R.eqProps('c', o1, o2); //=> true
 * ```
 *
 * {@see https://ramdajs.com/docs/#eqProps}
 */
describe('object.eqProps', () => {
  it('should define R.eqProps', () => {
    expect.assertions(1);

    expect(R.eqProps).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.eqProps', () => {
    expect.assertions(1);
  });
});
