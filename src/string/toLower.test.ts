import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       toLower
 * Category:   string
 *
 * The lower case version of a string.
 *
 *
 * ```typescript
 * R.toLower('XYZ'); //=> 'xyz'
 * ```
 *
 * {@see https://ramdajs.com/docs/#toLower}
 * {@see https://ramdajs.com/docs/#toUpper}
 */
describe('string.toLower', () => {
  it('should define R.toLower', () => {
    expect.assertions(1);

    expect(R.toLower).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.toLower', () => {
    expect.assertions(1);
  });
});
