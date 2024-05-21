import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       pair
 * Category:   list
 * 
 * Takes two arguments, fst and snd, and returns [fst, snd].
 * 
 * 
 * ```typescript
 * R.pair('foo', 'bar'); //=> ['foo', 'bar']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#pair}
 * {@see https://ramdajs.com/docs/#objOf,
                of}
 */
describe('list.pair', () => {
  it('should define R.pair', () => {
    expect.assertions(1);

    expect(R.pair).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pair', () => {
    expect.assertions(1);
  });
});
