import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       lensPath
 * Category:   object
 * 
 * Returns a lens whose focus is the specified path.
 * 
 * 
 * ```typescript
 * const xHeadYLens = R.lensPath(['x', 0, 'y']);
 * 
 * R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 * //=> 2
 * R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 * //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 * R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 * //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#lensPath}
 * {@see https://ramdajs.com/docs/#view,
                set,
                over}
 */
describe('object.lensPath', () => {
  it('should define R.lensPath', () => {
    expect.assertions(1);

    expect(R.lensPath).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.lensPath', () => {
    expect.assertions(1);
  });
});
