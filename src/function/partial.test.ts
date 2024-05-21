import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       partial
 * Category:   function
 * 
 * Takes a function f and a list of arguments, and returns a function g.
 * When applied, g returns the result of applying f to the arguments
 * provided initially followed by the arguments provided to g.
 * 
 * 
 * ```typescript
 * const multiply2 = (a, b) => a * b;
 * const double = R.partial(multiply2, [2]);
 * double(3); //=> 6
 * 
 * const greet = (salutation, title, firstName, lastName) =>
 *   salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 * 
 * const sayHello = R.partial(greet, ['Hello']);
 * const sayHelloToMs = R.partial(sayHello, ['Ms.']);
 * sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#partial}
 * {@see https://ramdajs.com/docs/#partialRight,
                curry}
 */
describe('function.partial', () => {
  it('should define R.partial', () => {
    expect.assertions(1);

    expect(R.partial).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.partial', () => {
    expect.assertions(1);
  });
});
