import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       ascend
 * Category:   function
 * 
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with < and >.
 * 
 * 
 * ```typescript
 * const byAge = R.ascend(R.prop('age'));
 * const people = [
 *   { name: 'Emma', age: 70 },
 *   { name: 'Peter', age: 78 },
 *   { name: 'Mikhail', age: 62 },
 * ];
 * const peopleByYoungestFirst = R.sort(byAge, people);
 *   //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#ascend}
 * {@see https://ramdajs.com/docs/#descend}
 */
describe('function.ascend', () => {
  it('should define R.ascend', () => {
    expect.assertions(1);

    expect(R.ascend).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.ascend', () => {
    expect.assertions(1);
  });
});
