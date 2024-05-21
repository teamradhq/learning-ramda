import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       pluck
 * Category:   list
 * 
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 * pluck will work on
 * any functor in
 * addition to arrays, as it is equivalent to R.map(R.prop(k), f).
 * 
 * 
 * ```typescript
 * var getAges = R.pluck('age');
 * getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 * 
 * R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 * R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#pluck}
 * {@see https://ramdajs.com/docs/#project,
                prop,
                props}
 */
describe('list.pluck', () => {
  it('should define R.pluck', () => {
    expect.assertions(1);

    expect(R.pluck).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pluck', () => {
    expect.assertions(1);
  });
});
