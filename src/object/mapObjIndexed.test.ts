import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mapObjIndexed
 * Category:   object
 * 
 * An Object-specific version of map. The function is applied to three
 * arguments: (value, key, obj). If only the value is significant, use
 * map instead.
 * 
 * 
 * ```typescript
 * const xyz = { x: 1, y: 2, z: 3 };
 * const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 * 
 * R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mapObjIndexed}
 * {@see https://ramdajs.com/docs/#map}
 */
describe('object.mapObjIndexed', () => {
  it('should define R.mapObjIndexed', () => {
    expect.assertions(1);

    expect(R.mapObjIndexed).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mapObjIndexed', () => {
    expect.assertions(1);
  });
});
