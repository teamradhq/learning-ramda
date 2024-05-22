import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       dropRepeats
 * Category:   list
 *
 * Returns a new list without any consecutively repeating elements.
 * R.equals is used to determine equality.
 * Acts as a transducer if a transformer is given in list position.
 *
 *
 * ```typescript
 * R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 * ```
 *
 * {@see https://ramdajs.com/docs/#dropRepeats}
 * {@see https://ramdajs.com/docs/#transduce}
 */
describe('list.dropRepeats', () => {
  it('should define R.dropRepeats', () => {
    expect.assertions(1);

    expect(R.dropRepeats).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.dropRepeats', () => {
    expect.assertions(1);
  });
});
