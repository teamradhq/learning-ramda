import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       unnest
 * Category:   list
 * 
 * Shorthand for R.chain(R.identity), which removes one level of nesting from
 * any Chain.
 * 
 * 
 * ```typescript
 * R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 * R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#unnest}
 * {@see https://ramdajs.com/docs/#flatten,
                chain}
 */
describe('list.unnest', () => {
  it('should define R.unnest', () => {
    expect.assertions(1);

    expect(R.unnest).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.unnest', () => {
    expect.assertions(1);
  });
});
