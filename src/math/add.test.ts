import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       add
 * Category:   math
 *
 * Adds two values.
 *
 * {@see https://ramdajs.com/docs/#add}
 * {@see https://ramdajs.com/docs/#subtract}
 */
describe('math.add', () => {
  it('should add two numbers', () => {
    expect.assertions(2);

    expect(R.add(2, 3)).toBe(5);
    expect(R.add(7)(10)).toBe(17);
  });
});
