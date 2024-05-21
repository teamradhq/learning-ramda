import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       anyPass
 * Category:   logic
 * 
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 * 
 * 
 * ```typescript
 * const isClub = R.propEq('♣', 'suit');
 * const isSpade = R.propEq('♠', 'suit');
 * const isBlackCard = R.anyPass([isClub, isSpade]);
 * 
 * isBlackCard({rank: '10', suit: '♣'}); //=> true
 * isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 * isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#anyPass}
 * {@see https://ramdajs.com/docs/#allPass,
                either}
 */
describe('logic.anyPass', () => {
  it('should define R.anyPass', () => {
    expect.assertions(1);

    expect(R.anyPass).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.anyPass', () => {
    expect.assertions(1);
  });
});
