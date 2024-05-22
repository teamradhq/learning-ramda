import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       partialRight
 * Category:   function
 *
 * Takes a function f and a list of arguments, and returns a function g.
 * When applied, g returns the result of applying f to the arguments
 * provided to g followed by the arguments provided initially.
 *
 *
 * ```typescript
 * const greet = (salutation, title, firstName, lastName) =>
 *   salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 * const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 * greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * ```
 *
 * {@see https://ramdajs.com/docs/#partialRight}
 * {@see https://ramdajs.com/docs/#partial}
 */
describe('function.partialRight', () => {
  it('should define R.partialRight', () => {
    expect.assertions(1);

    expect(R.partialRight).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.partialRight', () => {
    expect.assertions(1);
  });
});
