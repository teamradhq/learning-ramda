import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       invoker
 * Category:   function
 *
 * Given an arity (Number) and a name (String) the invoker function
 * returns a curried function that takes arity arguments and a context
 * object. It will "invoke" the name'd function (a method) on the context
 * object.
 *
 *
 * ```typescript
 * // A function with no arguments
 * const asJson = invoker(0, "json")
 * // Just like calling .then((response) => response.json())
 * fetch("http://example.com/index.json").then(asJson)
 *
 * // A function with one argument
 * const sliceFrom = invoker(1, 'slice');
 * sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *
 * // A function with two arguments
 * const sliceFrom6 = invoker(2, 'slice')(6);
 * sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 *
 * // NOTE: You can't simply pass some of the arguments to the initial invoker function.
 * const firstCreditCardSection = invoker(2, "slice", 0, 4)
 * firstCreditCardSection("4242 4242 4242 4242") // => Function<...>
 *
 * // Since invoker returns a curried function, you may partially apply it to create the function you need.
 * const firstCreditCardSection = invoker(2, "slice")(0, 4)
 * firstCreditCardSection("4242 4242 4242 4242") // => "4242"
 * ```
 *
 * {@see https://ramdajs.com/docs/#invoker}
 * {@see https://ramdajs.com/docs/#construct}
 */
describe('function.invoker', () => {
  it('should define R.invoker', () => {
    expect.assertions(1);

    expect(R.invoker).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.invoker', () => {
    expect.assertions(1);
  });
});
