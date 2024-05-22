import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       equals
 * Category:   relation
 *
 * Returns true if its arguments are equivalent, false otherwise. Handles
 * cyclical data structures.
 * Dispatches symmetrically to the equals methods of both arguments, if
 * present.
 *
 *
 * ```typescript
 * R.equals(1, 1); //=> true
 * R.equals(1, '1'); //=> false
 * R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 * const a = {}; a.v = a;
 * const b = {}; b.v = b;
 * R.equals(a, b); //=> true
 * ```
 *
 * {@see https://ramdajs.com/docs/#equals}
 */
describe('relation.equals', () => {
  it('should define R.equals', () => {
    expect.assertions(1);

    expect(R.equals).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.equals', () => {
    expect.assertions(1);
  });
});
