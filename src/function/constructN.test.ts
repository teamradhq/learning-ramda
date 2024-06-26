import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       constructN
 * Category:   function
 *
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 *
 * ```typescript
 * // Variadic Constructor function
 * function Salad() {
 *   this.ingredients = arguments;
 * }
 *
 * Salad.prototype.recipe = function() {
 *   const instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *   return R.join('\n', instructions);
 * };
 *
 * const ThreeLayerSalad = R.constructN(3, Salad);
 *
 * // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 * const salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 * console.log(salad.recipe());
 * // Add a dollop of Mayonnaise
 * // Add a dollop of Potato Chips
 * // Add a dollop of Ketchup
 * ```
 *
 * {@see https://ramdajs.com/docs/#constructN}
 */
describe('function.constructN', () => {
  it('should define R.constructN', () => {
    expect.assertions(1);

    expect(R.constructN).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.constructN', () => {
    expect.assertions(1);
  });
});
