import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       product
 * Category:   math
 *
 * Multiplies together all the elements of a list.
 *
 *
 * ```typescript
 * R.product([2,4,6,8,100,1]); //=> 38400
 * ```
 *
 * {@see https://ramdajs.com/docs/#product}
 * {@see https://ramdajs.com/docs/#reduce}
 */
describe('math.product', () => {
  it('should yield the product', () => {
    expect.assertions(1);

    expect(R.product([2, 4, 6, 8, 100, 1])).toBe(38400);
  });
});
