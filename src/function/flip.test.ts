import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       flip
 * Category:   function
 *
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 *
 * ```typescript
 * const mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 * mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 * R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * ```
 *
 * {@see https://ramdajs.com/docs/#flip}
 */
describe('function.flip', () => {
  it('should define R.flip', () => {
    expect.assertions(1);

    expect(R.flip).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.flip', () => {
    expect.assertions(1);
  });
});
