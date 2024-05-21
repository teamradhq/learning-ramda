import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       until
 * Category:   logic
 * 
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 * 
 * 
 * ```typescript
 * R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 * ```
 * 
 * {@see https://ramdajs.com/docs/#until}
 */
describe('logic.until', () => {
  it('should define R.until', () => {
    expect.assertions(1);

    expect(R.until).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.until', () => {
    expect.assertions(1);
  });
});
