import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       paths
 * Category:   object
 *
 * Retrieves the values at given paths of an object.
 *
 *
 * ```typescript
 * R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 * R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 * ```
 *
 * {@see https://ramdajs.com/docs/#paths}
 * {@see https://ramdajs.com/docs/#path}
 */
describe('object.paths', () => {
  it('should define R.paths', () => {
    expect.assertions(1);

    expect(R.paths).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.paths', () => {
    expect.assertions(1);
  });
});
