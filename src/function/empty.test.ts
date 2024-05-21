import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       empty
 * Category:   function
 * 
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array ([]), Object ({}), String (''),
 * TypedArray (Uint8Array [], Float32Array [], etc), and Arguments. Other
 * types are supported if they define <Type>.empty,
 * <Type>.prototype.empty or implement the
 * FantasyLand Monoid spec.
 * Dispatches to the empty method of the first argument, if present.
 * 
 * 
 * ```typescript
 * R.empty(Just(42));               //=> Nothing()
 * R.empty([1, 2, 3]);              //=> []
 * R.empty('unicorns');             //=> ''
 * R.empty({x: 1, y: 2});           //=> {}
 * R.empty(Uint8Array.from('123')); //=> Uint8Array []
 * ```
 * 
 * {@see https://ramdajs.com/docs/#empty}
 */
describe('function.empty', () => {
  it('should define R.empty', () => {
    expect.assertions(1);

    expect(R.empty).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.empty', () => {
    expect.assertions(1);
  });
});
