import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       splitWhenever
 * Category:   list
 * 
 * Splits an array into slices on every occurrence of a value.
 * 
 * 
 * ```typescript
 * R.splitWhenever(R.equals(2), [1, 2, 3, 2, 4, 5, 2, 6, 7]); //=> [[1], [3], [4, 5], [6, 7]]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#splitWhenever}
 */
describe('list.splitWhenever', () => {
  it('should define R.splitWhenever', () => {
    expect.assertions(1);

    expect(R.splitWhenever).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.splitWhenever', () => {
    expect.assertions(1);
  });
});
