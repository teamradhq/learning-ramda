import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       project
 * Category:   object
 * 
 * Reasonable analog to SQL select statement.
 * 
 * 
 * ```typescript
 * const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 * const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 * const kids = [abby, fred];
 * R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#project}
 * {@see https://ramdajs.com/docs/#pluck,
                props,
                prop}
 */
describe('object.project', () => {
  it('should define R.project', () => {
    expect.assertions(1);

    expect(R.project).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.project', () => {
    expect.assertions(1);
  });
});
