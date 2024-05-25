import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       either
 * Category:   logic
 *
 * A function wrapping calls to the two functions in an || operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, R.either also accepts any fantasy-land compatible
 * applicative functor.
 *
 * {@see https://ramdajs.com/docs/#either}
 * {@see https://ramdajs.com/docs/#both}
 * {@see https://ramdajs.com/docs/#anyPass}
 * {@see https://ramdajs.com/docs/#or}
 */
describe('logic.either', () => {
  it('should be true of either are true', () => {
    expect.assertions(3);

    const gt10 = (x: number) => x > 10;
    const even = (x: number) => x % 2 === 0;
    const f = R.either(gt10, even);

    expect(f(101)).toBe(true);
    expect(f(8)).toBe(true);
    expect(f(7)).toBe(false);
  });
});
