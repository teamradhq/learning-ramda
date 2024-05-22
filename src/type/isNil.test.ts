import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       isNil
 * Category:   type
 *
 * Checks if the input value is null or undefined.
 *
 *
 * ```typescript
 * R.isNil(null); //=> true
 * R.isNil(undefined); //=> true
 * R.isNil(0); //=> false
 * R.isNil([]); //=> false
 * ```
 *
 * {@see https://ramdajs.com/docs/#isNil}
 */
describe('type.isNil', () => {
  it('should define R.isNil', () => {
    expect.assertions(1);

    expect(R.isNil).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.isNil', () => {
    expect.assertions(1);
  });
});
