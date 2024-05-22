import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       promap
 * Category:   function
 *
 * Takes two functions as pre- and post- processors respectively for a third function,
 * i.e. promap(f, g, h)(x) === g(h(f(x))).
 * Dispatches to the promap method of the third argument, if present,
 * according to the FantasyLand Profunctor spec.
 * Acts as a transducer if a transformer is given in profunctor position.
 *
 *
 * ```typescript
 * const decodeChar = R.promap(s => s.charCodeAt(), String.fromCharCode, R.add(-8))
 * const decodeString = R.promap(R.split(''), R.join(''), R.map(decodeChar))
 * decodeString("ziuli") //=> "ramda"
 * ```
 *
 * {@see https://ramdajs.com/docs/#promap}
 * {@see https://ramdajs.com/docs/#transduce}
 */
describe('function.promap', () => {
  it('should define R.promap', () => {
    expect.assertions(1);

    expect(R.promap).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.promap', () => {
    expect.assertions(1);
  });
});
