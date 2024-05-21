import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       unless
 * Category:   logic
 * 
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the whenFalseFn function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 * 
 * 
 * ```typescript
 * let safeInc = R.unless(R.isNil, R.inc);
 * safeInc(null); //=> null
 * safeInc(1); //=> 2
 * ```
 * 
 * {@see https://ramdajs.com/docs/#unless}
 * {@see https://ramdajs.com/docs/#ifElse,
                when,
                cond}
 */
describe('logic.unless', () => {
  it('should define R.unless', () => {
    expect.assertions(1);

    expect(R.unless).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.unless', () => {
    expect.assertions(1);
  });
});
