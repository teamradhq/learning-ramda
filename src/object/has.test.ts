import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       has
 * Category:   object
 *
 * Returns whether or not an object has an own property with the specified name
 *
 *
 * ```typescript
 * const hasName = R.has('name');
 * hasName({name: 'alice'});   //=> true
 * hasName({name: 'bob'});     //=> true
 * hasName({});                //=> false
 *
 * const point = {x: 0, y: 0};
 * const pointHas = R.has(R.__, point);
 * pointHas('x');  //=> true
 * pointHas('y');  //=> true
 * pointHas('z');  //=> false
 * ```
 *
 * {@see https://ramdajs.com/docs/#has}
 */
describe('object.has', () => {
  it('should define R.has', () => {
    expect.assertions(1);

    expect(R.has).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.has', () => {
    expect.assertions(1);
  });
});
