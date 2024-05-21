import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       allPass
 * Category:   logic
 * 
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 * 
 * 
 * ```typescript
 * const isQueen = R.propEq('Q', 'rank');
 * const isSpade = R.propEq('♠︎', 'suit');
 * const isQueenOfSpades = R.allPass([isQueen, isSpade]);
 * 
 * isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 * isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#allPass}
 * {@see https://ramdajs.com/docs/#anyPass,
                both}
 */
describe('logic.allPass', () => {
  it('should define R.allPass', () => {
    expect.assertions(1);

    expect(R.allPass).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.allPass', () => {
    expect.assertions(1);
  });
});
