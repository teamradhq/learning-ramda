import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       both
 * Category:   logic
 *
 * A function which calls the two provided functions and returns the && of the results.
 * It returns the result of the first function if it is false-y and the result of the
 * second function otherwise. Note that this is short-circuited, meaning that the
 * second function will not be invoked if the first returns a false-y value.
 *
 * In addition to functions, R.both also accepts any fantasy-land compatible
 * applicative functor.
 *
 * {@see https://ramdajs.com/docs/#both}
 * {@see https://ramdajs.com/docs/#either}
 * {@see https://ramdajs.com/docs/#allPass}
 * {@see https://ramdajs.com/docs/#and}
 */
describe('logic.both', () => {
  it('should check within range', () => {
    expect.assertions(2);

    const gt10 = R.gt(R.__, 10);
    const lt20 = R.lt(R.__, 20);
    const f = R.both(gt10, lt20);

    expect(f(15)).toBe(true);
    expect(f(30)).toBe(false);
  });
});
