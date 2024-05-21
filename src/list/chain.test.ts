import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       chain
 * Category:   list
 * 
 * chain maps a function over a list and concatenates the results. chain
 * is also known as flatMap in some libraries.
 * Dispatches to the chain method of the second argument, if present,
 * according to the FantasyLand Chain spec.
 * If second argument is a function, chain(f, g)(x) is equivalent to f(g(x), x).
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const duplicate = n => [n, n];
 * R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 * 
 * R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#chain}
 */
describe('list.chain', () => {
  it('should define R.chain', () => {
    expect.assertions(1);

    expect(R.chain).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.chain', () => {
    expect.assertions(1);
  });
});
