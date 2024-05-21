import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       comparator
 * Category:   function
 * 
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 * 
 * 
 * ```typescript
 * const byAge = R.comparator((a, b) => a.age < b.age);
 * const people = [
 *   { name: 'Emma', age: 70 },
 *   { name: 'Peter', age: 78 },
 *   { name: 'Mikhail', age: 62 },
 * ];
 * const peopleByIncreasingAge = R.sort(byAge, people);
 *   //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#comparator}
 */
describe('function.comparator', () => {
  it('should define R.comparator', () => {
    expect.assertions(1);

    expect(R.comparator).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.comparator', () => {
    expect.assertions(1);
  });
});
