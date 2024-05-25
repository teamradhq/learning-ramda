import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       and
 * Category:   logic
 *
 * Returns the first argument if it is falsy, otherwise the second argument.
 * Acts as the boolean and statement if both inputs are Booleans.
 *
 * {@see https://ramdajs.com/docs/#and}
 * {@see https://ramdajs.com/docs/#both}
 * {@see https://ramdajs.com/docs/#or}
 */
describe('logic.and', () => {
  it('should be true', () => {
    expect.assertions(1);

    expect(R.and(true, true)).toBe(true);
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it('should be false', () => {
    expect.assertions(3);

    expect(R.and(true, false)).toBe(false);
    expect(R.and(false, true)).toBe(false);
    expect(R.and(false, false)).toBe(false);
  });
});
