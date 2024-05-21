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
 * Dispatches to the filter method of the second argument, if present.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const isEven = n => n % 2 === 0;
 * 
 * R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 * 
 * R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#filter}
 * {@see https://ramdajs.com/docs/#reject,
                transduce,
                addIndex}
 */
describe('list.filter', () => {
  it('should define R.filter', () => {
    expect.assertions(1);

    expect(R.filter).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.filter', () => {
    expect.assertions(1);
  });
});
