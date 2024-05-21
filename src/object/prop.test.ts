import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       prop
 * Category:   object
 * 
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 * 
 * 
 * ```typescript
 * R.prop('x', {x: 100}); //=> 100
 * R.prop('x', {}); //=> undefined
 * R.prop(0, [100]); //=> 100
 * R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 * ```
 * 
 * {@see https://ramdajs.com/docs/#prop}
 * {@see https://ramdajs.com/docs/#path,
                props,
                pluck,
                project,
                nth}
 */
describe('object.prop', () => {
  it('should define R.prop', () => {
    expect.assertions(1);

    expect(R.prop).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.prop', () => {
    expect.assertions(1);
  });
});
