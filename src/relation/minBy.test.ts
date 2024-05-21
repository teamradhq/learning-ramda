import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       minBy
 * Category:   relation
 * 
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 * 
 * 
 * ```typescript
 * //  square :: Number -> Number
 * const square = n => n * n;
 * 
 * R.minBy(square, -3, 2); //=> 2
 * 
 * R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 * R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 * ```
 * 
 * {@see https://ramdajs.com/docs/#minBy}
 * {@see https://ramdajs.com/docs/#min,
                maxBy}
 */
describe('relation.minBy', () => {
  it('should define R.minBy', () => {
    expect.assertions(1);

    expect(R.minBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.minBy', () => {
    expect.assertions(1);
  });
});
