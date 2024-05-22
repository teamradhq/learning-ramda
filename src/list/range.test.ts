import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       range
 * Category:   list
 *
 * Returns a list of numbers from from (inclusive) to to (exclusive).
 *
 *
 * ```typescript
 * R.range(1, 5);    //=> [1, 2, 3, 4]
 * R.range(50, 53);  //=> [50, 51, 52]
 * ```
 *
 * {@see https://ramdajs.com/docs/#range}
 */
describe('list.range', () => {
  it('should define R.range', () => {
    expect.assertions(1);

    expect(R.range).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.range', () => {
    expect.assertions(1);
  });
});
