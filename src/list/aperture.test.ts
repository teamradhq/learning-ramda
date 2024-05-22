import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       aperture
 * Category:   list
 *
 * Returns a new list, composed of n-tuples of consecutive elements. If n is
 * greater than the length of the list, an empty list is returned.
 * Acts as a transducer if a transformer is given in list position.
 *
 *
 * ```typescript
 * R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 * R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 * R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 * ```
 *
 * {@see https://ramdajs.com/docs/#aperture}
 * {@see https://ramdajs.com/docs/#transduce}
 */
describe('list.aperture', () => {
  it('should define R.aperture', () => {
    expect.assertions(1);

    expect(R.aperture).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.aperture', () => {
    expect.assertions(1);
  });
});
