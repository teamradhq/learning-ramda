import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       map
 * Category:   list
 *
 * Takes a function and a functor, applies the function to each of the functor's values,
 * and returns a functor of the same shape.
 *
 * Ramda provides suitable map implementations for Array and Object, so this function
 * may be applied to [1, 2, 3] or {x: 1, y: 2, z: 3}. Dispatches to the map method
 * of the second argument, if present. Acts as a transducer if a transformer is
 * given in list position. Also treats functions as functors and will compose
 * them together.
 *
 * {@see https://ramdajs.com/docs/#map}
 * {@see https://ramdajs.com/docs/#transduce}
 * {@see https://ramdajs.com/docs/#addIndex}
 * {@see https://ramdajs.com/docs/#pluck}
 * {@see https://ramdajs.com/docs/#project}
 */
describe('list.map', () => {
  it('should map arrays and objects', () => {
    expect.assertions(2);

    const double = (x: number) => x * 2;

    expect(R.map(double, [1, 2, 3])).toStrictEqual([2, 4, 6]);

    expect(R.map(double, { x: 1, y: 2, z: 3 })).toStrictEqual({ x: 2, y: 4, z: 6 });
  });
});
