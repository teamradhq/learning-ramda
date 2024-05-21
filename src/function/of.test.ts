import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       of
 * Category:   function
 * 
 * Given a constructor and a value, returns a new instance of that constructor
 * containing the value.
 * Dispatches to the fantasy-land/of method of the constructor first (if present)
 * or to the of method last (if present). When neither are present, wraps the
 * value in an array.
 * Note this of is different from the ES6 of; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 * 
 * 
 * ```typescript
 * R.of(Array, 42);   //=> [42]
 * R.of(Array, [42]); //=> [[42]]
 * R.of(Maybe, 42);   //=> Maybe.Just(42)
 * ```
 * 
 * {@see https://ramdajs.com/docs/#of}
 */
describe('function.of', () => {
  it('should define R.of', () => {
    expect.assertions(1);

    expect(R.of).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.of', () => {
    expect.assertions(1);
  });
});
