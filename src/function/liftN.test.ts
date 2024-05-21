import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       liftN
 * Category:   function
 * 
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the FantasyLand Apply spec.
 * 
 * 
 * ```typescript
 * const madd3 = R.liftN(3, (...args) => R.sum(args));
 * madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#liftN}
 * {@see https://ramdajs.com/docs/#lift,
                ap}
 */
describe('function.liftN', () => {
  it('should define R.liftN', () => {
    expect.assertions(1);

    expect(R.liftN).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.liftN', () => {
    expect.assertions(1);
  });
});
