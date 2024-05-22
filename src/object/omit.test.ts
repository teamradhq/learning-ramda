import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       omit
 * Category:   object
 *
 * Returns a partial copy of an object omitting the keys specified.
 *
 *
 * ```typescript
 * R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 * ```
 *
 * {@see https://ramdajs.com/docs/#omit}
 * {@see https://ramdajs.com/docs/#pick}
 */
describe('object.omit', () => {
  it('should define R.omit', () => {
    expect.assertions(1);

    expect(R.omit).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.omit', () => {
    expect.assertions(1);
  });
});
