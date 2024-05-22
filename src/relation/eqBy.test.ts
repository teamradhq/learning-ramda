import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       eqBy
 * Category:   relation
 *
 * Takes a function and two values in its domain and returns true if the
 * values map to the same value in the codomain; false otherwise.
 *
 *
 * ```typescript
 * R.eqBy(Math.abs, 5, -5); //=> true
 * ```
 *
 * {@see https://ramdajs.com/docs/#eqBy}
 */
describe('relation.eqBy', () => {
  it('should define R.eqBy', () => {
    expect.assertions(1);

    expect(R.eqBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.eqBy', () => {
    expect.assertions(1);
  });
});
