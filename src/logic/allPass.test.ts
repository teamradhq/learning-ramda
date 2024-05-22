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
 * {@see https://ramdajs.com/docs/#allPass}
 * {@see https://ramdajs.com/docs/#anyPass}
 * {@see https://ramdajs.com/docs/#both}
 */
describe('logic.allPass', () => {
  const isQueen = R.propEq('Q', 'rank');
  const isSpade = R.propEq('♠︎', 'suit');
  const isQueenOfSpades = R.allPass([isQueen, isSpade]);

  it('should not be queen of spades', () => {
    expect.assertions(1);

    expect(isQueenOfSpades({ rank: 'Q', suit: '♣︎' })).toBe(false);
  });

  it('should be queen of spades', () => {
    expect.assertions(1);

    expect(isQueenOfSpades({ rank: 'Q', suit: '♠︎' })).toBe(true);
  });
});
