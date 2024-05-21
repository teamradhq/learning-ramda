import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       reject
 * Category:   list
 * 
 * The complement of filter.
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as Array.
 * 
 * 
 * ```typescript
 * const isOdd = (n) => n % 2 !== 0;
 * 
 * R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 * 
 * R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#reject}
 * {@see https://ramdajs.com/docs/#filter,
                transduce,
                addIndex}
 */
describe('list.reject', () => {
  it('should define R.reject', () => {
    expect.assertions(1);

    expect(R.reject).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.reject', () => {
    expect.assertions(1);
  });
});
