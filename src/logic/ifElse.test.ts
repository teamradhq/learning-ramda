import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       ifElse
 * Category:   logic
 * 
 * Creates a function that will process either the onTrue or the onFalse
 * function depending upon the result of the condition predicate.
 * Note that ifElse takes its arity from the longest of the three functions passed to it.
 * 
 * 
 * ```typescript
 * const incCount = R.ifElse(
 *   R.has('count'),
 *   R.over(R.lensProp('count'), R.inc),
 *   R.assoc('count', 1)
 * );
 * incCount({ count: 1 }); //=> { count: 2 }
 * incCount({});           //=> { count: 1 }
 * ```
 * 
 * {@see https://ramdajs.com/docs/#ifElse}
 * {@see https://ramdajs.com/docs/#unless,
                when,
                cond}
 */
describe('logic.ifElse', () => {
  it('should define R.ifElse', () => {
    expect.assertions(1);

    expect(R.ifElse).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.ifElse', () => {
    expect.assertions(1);
  });
});
