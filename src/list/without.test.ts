import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       without
 * Category:   list
 * 
 * Returns a new list without values in the first argument.
 * R.equals is used to determine equality.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#without}
 * {@see https://ramdajs.com/docs/#transduce,
                difference,
                remove}
 */
describe('list.without', () => {
  it('should define R.without', () => {
    expect.assertions(1);

    expect(R.without).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.without', () => {
    expect.assertions(1);
  });
});
