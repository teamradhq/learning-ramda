import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       lensProp
 * Category:   object
 * 
 * Returns a lens whose focus is the specified property.
 * 
 * 
 * ```typescript
 * const xLens = R.lensProp('x');
 * 
 * R.view(xLens, {x: 1, y: 2});            //=> 1
 * R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 * R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#lensProp}
 * {@see https://ramdajs.com/docs/#view,
                set,
                over}
 */
describe('object.lensProp', () => {
  it('should define R.lensProp', () => {
    expect.assertions(1);

    expect(R.lensProp).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.lensProp', () => {
    expect.assertions(1);
  });
});
