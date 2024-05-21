import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       sum
 * Category:   math
 *
 * Adds together all the elements of a list.
 *
 *
 * ```typescript
 * R.sum([2,4,6,8,100,1]); //=> 121
 * ```
 *
 * {@see https://ramdajs.com/docs/#sum}
 * {@see https://ramdajs.com/docs/#reduce}
 */
describe('math.sum', () => {
  it('should define R.sum', () => {
    expect.assertions(1);

    expect(R.sum).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.sum', () => {
    expect.assertions(1);
  });
});
