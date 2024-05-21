import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       set
 * Category:   object
 * 
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 * 
 * 
 * ```typescript
 * const xLens = R.lensProp('x');
 * 
 * R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 * R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#set}
 * {@see https://ramdajs.com/docs/#view,
                over,
                lens,
                lensIndex,
                lensProp,
                lensPath}
 */
describe('object.set', () => {
  it('should define R.set', () => {
    expect.assertions(1);

    expect(R.set).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.set', () => {
    expect.assertions(1);
  });
});
