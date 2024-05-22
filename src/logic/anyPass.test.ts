import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

type Card = { rank: string; suit: string };
type CardChecker = (card: Card) => boolean;

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
 * {@see https://ramdajs.com/docs/#anyPass}
 * {@see https://ramdajs.com/docs/#allPass}
 * {@see https://ramdajs.com/docs/#either}
 */
describe('logic.anyPass', () => {
  const isClub = R.propEq('♣', 'suit');
  const isSpade = R.propEq('♠', 'suit');
  const isBlackCard = R.anyPass<CardChecker>([isClub, isSpade]);

  it('should be a black card', () => {
    expect.assertions(2);

    expect(isBlackCard({ rank: '10', suit: '♣' })).toBe(true);
    expect(isBlackCard({ rank: 'Q', suit: '♠' })).toBe(true);
  });

  it('should not be a black card', () => {
    expect.assertions(1);

    expect(isBlackCard({ rank: 'Q', suit: '♦' })).toBe(false);
  });
});
