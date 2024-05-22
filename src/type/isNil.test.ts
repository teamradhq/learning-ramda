import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       isNil
 * Category:   type
 *
 * Checks if the input value is null or undefined.
 *
 * {@see https://ramdajs.com/docs/#isNil}
 */
describe('type.isNil', () => {
  it('should be nil', () => {
    expect.assertions(2);

    expect(R.isNil(null)).toBe(true);
    expect(R.isNil(undefined)).toBe(true);
  });

  it('should not be nil', () => {
    expect.assertions(2);

    expect(R.isNil(0)).toBe(false);
    expect(R.isNil([])).toBe(false);
  });
});
