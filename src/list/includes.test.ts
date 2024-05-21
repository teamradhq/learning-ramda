import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       includes
 * Category:   list
 * 
 * Returns true if the specified value is equal, in R.equals
 * terms, to at least one element of the given list; false otherwise.
 * Also works with strings.
 * 
 * 
 * ```typescript
 * R.includes(3, [1, 2, 3]); //=> true
 * R.includes(4, [1, 2, 3]); //=> false
 * R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 * R.includes([42], [[42]]); //=> true
 * R.includes('ba', 'banana'); //=>true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#includes}
 * {@see https://ramdajs.com/docs/#any}
 */
describe('list.includes', () => {
  it('should define R.includes', () => {
    expect.assertions(1);

    expect(R.includes).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.includes', () => {
    expect.assertions(1);
  });
});
