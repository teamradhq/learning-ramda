import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       groupBy
 * Category:   list
 * 
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a key-returning function on each element, and grouping the
 * results according to values returned.
 * Dispatches to the groupBy method of the second argument, if present.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const byGrade = R.groupBy(function(student) {
 *   const score = student.score;
 *   return score < 65 ? 'F' :
 *          score < 70 ? 'D' :
 *          score < 80 ? 'C' :
 *          score < 90 ? 'B' : 'A';
 * });
 * const students = [{name: 'Abby', score: 84},
 *                 {name: 'Eddy', score: 58},
 *                 // ...
 *                 {name: 'Jack', score: 69}];
 * byGrade(students);
 * // {
 * //   'A': [{name: 'Dianne', score: 99}],
 * //   'B': [{name: 'Abby', score: 84}]
 * //   // ...,
 * //   'F': [{name: 'Eddy', score: 58}]
 * // }
 * ```
 * 
 * {@see https://ramdajs.com/docs/#groupBy}
 * {@see https://ramdajs.com/docs/#reduceBy,
                transduce,
                indexBy,
                collectBy}
 */
describe('list.groupBy', () => {
  it('should define R.groupBy', () => {
    expect.assertions(1);

    expect(R.groupBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.groupBy', () => {
    expect.assertions(1);
  });
});
