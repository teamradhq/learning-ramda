import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       prepend
 * Category:   list
 *
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 *
 * ```typescript
 * R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 * ```
 *
 * {@see https://ramdajs.com/docs/#prepend}
 * {@see https://ramdajs.com/docs/#append}
 */
describe('list.prepend', () => {
  it('should define R.prepend', () => {
    expect.assertions(1);

    expect(R.prepend).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.prepend', () => {
    expect.assertions(1);
  });
});
