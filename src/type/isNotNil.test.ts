import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       isNotNil
 * Category:   type
 *
 * Checks if the input value is not null and not undefined.
 *
 * {@see https://ramdajs.com/docs/#isNotNil}
 */
describe('type.isNotNil', () => {
  it('should not be not nil', () => {
    expect.assertions(2);

    expect(R.isNotNil(null)).toBe(false);
    expect(R.isNotNil(undefined)).toBe(false);
  });

  it('should be not nil', () => {
    expect.assertions(2);

    expect(R.isNotNil(0)).toBe(true);
    expect(R.isNotNil([])).toBe(true);
  });
});
