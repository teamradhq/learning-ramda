import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       indexBy
 * Category:   list
 *
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 * Acts as a transducer if a transformer is given in list position.
 *
 *
 * ```typescript
 * const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 * R.indexBy(R.prop('id'), list);
 * //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 * ```
 *
 * {@see https://ramdajs.com/docs/#indexBy}
 * {@see https://ramdajs.com/docs/#groupBy}
 */
describe('list.indexBy', () => {
  it('should define R.indexBy', () => {
    expect.assertions(1);

    expect(R.indexBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.indexBy', () => {
    expect.assertions(1);
  });
});
