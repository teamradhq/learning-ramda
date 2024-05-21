import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       partition
 * Category:   list
 * 
 * Takes a predicate and a list or other Filterable object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as Array.
 * 
 * 
 * ```typescript
 * R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']);
 * // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 * 
 * R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 * // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#partition}
 * {@see https://ramdajs.com/docs/#filter,
                reject}
 */
describe('list.partition', () => {
  it('should define R.partition', () => {
    expect.assertions(1);

    expect(R.partition).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.partition', () => {
    expect.assertions(1);
  });
});
