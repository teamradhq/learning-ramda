import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       partialObject
 * Category:   function
 * 
 * Takes a function f and an object, and returns a function g.
 * When applied, g returns the result of applying f to the object
 * provided initially merged deeply (right) with the object provided as an argument to g.
 * 
 * 
 * ```typescript
 * const multiply2 = ({ a, b }) => a * b;
 * const double = R.partialObject(multiply2, { a: 2 });
 * double({ b: 2 }); //=> 4
 * 
 * const greet = ({ salutation, title, firstName, lastName }) =>
 *   salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 * 
 * const sayHello = R.partialObject(greet, { salutation: 'Hello' });
 * const sayHelloToMs = R.partialObject(sayHello, { title: 'Ms.' });
 * sayHelloToMs({ firstName: 'Jane', lastName: 'Jones' }); //=> 'Hello, Ms. Jane Jones!'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#partialObject}
 * {@see https://ramdajs.com/docs/#partial,
                partialRight,
                curry,
                mergeDeepRight}
 */
describe('function.partialObject', () => {
  it('should define R.partialObject', () => {
    expect.assertions(1);

    expect(R.partialObject).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.partialObject', () => {
    expect.assertions(1);
  });
});
