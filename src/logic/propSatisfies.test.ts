import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       propSatisfies
 * Category:   logic
 * 
 * Returns true if the specified object property satisfies the given
 * predicate; false otherwise. You can test multiple properties with
 * R.where.
 * 
 * 
 * ```typescript
 * R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#propSatisfies}
 * {@see https://ramdajs.com/docs/#where,
                propEq,
                propIs}
 */
describe('logic.propSatisfies', () => {
  it('should define R.propSatisfies', () => {
    expect.assertions(1);

    expect(R.propSatisfies).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.propSatisfies', () => {
    expect.assertions(1);
  });
});
