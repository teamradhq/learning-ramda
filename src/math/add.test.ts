import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       add
 * Category:   math
 *
 * Adds two values.
 *
 *
 * ```typescript
 * R.add(2, 3);       //=>  5
 * R.add(7)(10);      //=> 17
 * ```
 *
 * {@see https://ramdajs.com/docs/#add}
 * {@see https://ramdajs.com/docs/#subtract}
 */
describe('math.add', () => {
  it('should define R.add', () => {
    expect.assertions(1);

    expect(R.add).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.add', () => {
    expect.assertions(1);
  });
});
