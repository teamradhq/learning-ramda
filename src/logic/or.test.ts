import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       or
 * Category:   logic
 *
 * Returns the first argument if it is truthy, otherwise the second argument.
 * Acts as the boolean or statement if both inputs are Booleans.
 *
 * {@see https://ramdajs.com/docs/#or}
 * {@see https://ramdajs.com/docs/#either},
 * {@see https://ramdajs.com/docs/#and}
 */
describe('logic.or', () => {
  it('should be true if one or the other is true', () => {
    expect.assertions(4);

    expect(R.or(true, true)).toBe(true);
    expect(R.or(true, false)).toBe(true);
    expect(R.or(false, true)).toBe(true);
    expect(R.or(false, false)).toBe(false);
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.or', () => {
    expect.assertions(1);
  });
});
