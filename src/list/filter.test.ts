import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       filter
 * Category:   list
 *
 * Takes a predicate and a Filterable, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as Array.
 *
 * Dispatches to the filter method of the second argument, if present.
 * Acts as a transducer if a transformer is given in list position.
 *
 * {@see https://ramdajs.com/docs/#filter}
 * {@see https://ramdajs.com/docs/#reject}
 * {@see https://ramdajs.com/docs/#transduce}
 * {@see https://ramdajs.com/docs/#addIndex}
 */
describe('list.filter', () => {
  it('should filter arrays and objects', () => {
    expect.assertions(2);

    const isEven = (n: number) => n % 2 === 0;

    expect(R.filter(isEven, [1, 2, 3])).toStrictEqual([2]);

    expect(R.filter(isEven, { x: 1, y: 2, z: 3 })).toStrictEqual({ y: 2 });
  });
});
