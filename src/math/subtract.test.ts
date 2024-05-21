import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       subtract
 * Category:   math
 *
 * Subtracts its second argument from its first argument.
 *
 *
 * ```typescript
 * R.subtract(10, 8); //=> 2
 *
 * const minus5 = R.subtract(R.__, 5);
 * minus5(17); //=> 12
 *
 * const complementaryAngle = R.subtract(90);
 * complementaryAngle(30); //=> 60
 * complementaryAngle(72); //=> 18
 * ```
 *
 * {@see https://ramdajs.com/docs/#subtract}
 * {@see https://ramdajs.com/docs/#add}
 */
describe('math.subtract', () => {
  it('should define R.subtract', () => {
    expect.assertions(1);

    expect(R.subtract).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.subtract', () => {
    expect.assertions(1);
  });
});
