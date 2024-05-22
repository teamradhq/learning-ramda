import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       traverse
 * Category:   list
 *
 * Maps an Applicative-returning
 * function over a Traversable,
 * then uses sequence to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 * Dispatches to the traverse method of the third argument, if present.
 *
 *
 * ```typescript
 * // Returns `Maybe.Nothing` if the given divisor is `0`
 * const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
 *
 * R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
 * R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing
 *
 * // Using a Type Representative
 * R.traverse(Maybe, safeDiv(10), Right(4)); //=> Just(Right(2.5))
 * R.traverse(Maybe, safeDiv(10), Right(0)); //=> Nothing
 * R.traverse(Maybe, safeDiv(10), Left("X")); //=> Just(Left("X"))
 * ```
 *
 * {@see https://ramdajs.com/docs/#traverse}
 * {@see https://ramdajs.com/docs/#sequence}
 */
describe('list.traverse', () => {
  it('should define R.traverse', () => {
    expect.assertions(1);

    expect(R.traverse).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.traverse', () => {
    expect.assertions(1);
  });
});
