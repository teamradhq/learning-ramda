import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       lift
 * Category:   function
 * 
 * "lifts" a function of arity >= 1 so that it may "map over" a list, Function or other
 * object that satisfies the FantasyLand Apply spec.
 * 
 * 
 * ```typescript
 * const madd3 = R.lift((a, b, c) => a + b + c);
 * 
 * madd3([100, 200], [30, 40], [5, 6, 7]); //=> [135, 136, 137, 145, 146, 147, 235, 236, 237, 245, 246, 247]
 * 
 * const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 * 
 * madd5([10, 20], [1], [2, 3], [4], [100, 200]); //=> [117, 217, 118, 218, 127, 227, 128, 228]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#lift}
 * {@see https://ramdajs.com/docs/#liftN}
 */
describe('function.lift', () => {
  it('should define R.lift', () => {
    expect.assertions(1);

    expect(R.lift).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.lift', () => {
    expect.assertions(1);
  });
});
