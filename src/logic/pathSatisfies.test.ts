import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       pathSatisfies
 * Category:   logic
 * 
 * Returns true if the specified object property at given path satisfies the
 * given predicate; false otherwise.
 * 
 * 
 * ```typescript
 * R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 * R.pathSatisfies(R.is(Object), [], {x: {y: 2}}); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#pathSatisfies}
 * {@see https://ramdajs.com/docs/#propSatisfies,
                path}
 */
describe('logic.pathSatisfies', () => {
  it('should define R.pathSatisfies', () => {
    expect.assertions(1);

    expect(R.pathSatisfies).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pathSatisfies', () => {
    expect.assertions(1);
  });
});
