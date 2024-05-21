import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mapAccumRight
 * Category:   list
 * 
 * The mapAccumRight function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 * Similar to mapAccum, except moves through the input list from
 * the right to the left.
 * The iterator function receives two arguments, acc and value, and should
 * return a tuple [acc, value].
 * 
 * 
 * ```typescript
 * const digits = ['1', '2', '3', '4'];
 * const appender = (a, b) => [b + a, b + a];
 * 
 * R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mapAccumRight}
 * {@see https://ramdajs.com/docs/#addIndex,
                mapAccum}
 */
describe('list.mapAccumRight', () => {
  it('should define R.mapAccumRight', () => {
    expect.assertions(1);

    expect(R.mapAccumRight).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mapAccumRight', () => {
    expect.assertions(1);
  });
});
