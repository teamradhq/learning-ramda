import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       lens
 * Category:   object
 * 
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 * 
 * 
 * ```typescript
 * const xLens = R.lens(R.prop('x'), R.assoc('x'));
 * 
 * R.view(xLens, {x: 1, y: 2});            //=> 1
 * R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 * R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#lens}
 * {@see https://ramdajs.com/docs/#view,
                set,
                over,
                lensIndex,
                lensProp}
 */
describe('object.lens', () => {
  it('should define R.lens', () => {
    expect.assertions(1);

    expect(R.lens).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.lens', () => {
    expect.assertions(1);
  });
});
