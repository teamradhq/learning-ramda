import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       maxBy
 * Category:   relation
 * 
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 * 
 * 
 * ```typescript
 * //  square :: Number -> Number
 * const square = n => n * n;
 * 
 * R.maxBy(square, -3, 2); //=> -3
 * 
 * R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 * R.reduce(R.maxBy(square), 0, []); //=> 0
 * ```
 * 
 * {@see https://ramdajs.com/docs/#maxBy}
 * {@see https://ramdajs.com/docs/#max,
                minBy}
 */
describe('relation.maxBy', () => {
  it('should define R.maxBy', () => {
    expect.assertions(1);

    expect(R.maxBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.maxBy', () => {
    expect.assertions(1);
  });
});
