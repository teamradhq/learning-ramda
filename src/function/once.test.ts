import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       once
 * Category:   function
 *
 * Accepts a function fn and returns a function that guards invocation of
 * fn such that fn can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 *
 * ```typescript
 * const addOneOnce = R.once(x => x + 1);
 * addOneOnce(10); //=> 11
 * addOneOnce(addOneOnce(50)); //=> 11
 * ```
 *
 * {@see https://ramdajs.com/docs/#once}
 */
describe('function.once', () => {
  it('should define R.once', () => {
    expect.assertions(1);

    expect(R.once).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.once', () => {
    expect.assertions(1);
  });
});
