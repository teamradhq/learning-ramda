import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       descend
 * Category:   function
 * 
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with < and >.
 * 
 * 
 * ```typescript
 * const byAge = R.descend(R.prop('age'));
 * const people = [
 *   { name: 'Emma', age: 70 },
 *   { name: 'Peter', age: 78 },
 *   { name: 'Mikhail', age: 62 },
 * ];
 * const peopleByOldestFirst = R.sort(byAge, people);
 *   //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#descend}
 * {@see https://ramdajs.com/docs/#ascend}
 */
describe('function.descend', () => {
  it('should define R.descend', () => {
    expect.assertions(1);

    expect(R.descend).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.descend', () => {
    expect.assertions(1);
  });
});
