import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       construct
 * Category:   function
 * 
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 * 
 * 
 * ```typescript
 * // Constructor function
 * function Animal(kind) {
 *   this.kind = kind;
 * };
 * Animal.prototype.sighting = function() {
 *   return "It's a " + this.kind + "!";
 * }
 * 
 * const AnimalConstructor = R.construct(Animal)
 * 
 * // Notice we no longer need the 'new' keyword:
 * AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 * 
 * const animalTypes = ["Lion", "Tiger", "Bear"];
 * const animalSighting = R.invoker(0, 'sighting');
 * const sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 * R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#construct}
 * {@see https://ramdajs.com/docs/#invoker}
 */
describe('function.construct', () => {
  it('should define R.construct', () => {
    expect.assertions(1);

    expect(R.construct).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.construct', () => {
    expect.assertions(1);
  });
});
