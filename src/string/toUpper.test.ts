import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       toUpper
 * Category:   string
 *
 * The upper case version of a string.
 *
 *
 * ```typescript
 * R.toUpper('abc'); //=> 'ABC'
 * ```
 *
 * {@see https://ramdajs.com/docs/#toUpper}
 * {@see https://ramdajs.com/docs/#toLower}
 */
describe('string.toUpper', () => {
  it('should define R.toUpper', () => {
    expect.assertions(1);

    expect(R.toUpper).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.toUpper', () => {
    expect.assertions(1);
  });
});
