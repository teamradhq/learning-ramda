import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       modify
 * Category:   object
 *
 * Creates a copy of the passed object by applying an fn function to the given prop property.
 * The function will not be invoked, and the object will not change
 * if its corresponding property does not exist in the object.
 * All non-primitive properties are copied to the new object by reference.
 *
 *
 * ```typescript
 * const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
 * R.modify('age', R.add(1), person); //=> {name: 'James', age: 21, pets: ['dog', 'cat']}
 * R.modify('pets', R.append('turtle'), person); //=> {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
 * ```
 *
 * {@see https://ramdajs.com/docs/#modify}
 */
describe('object.modify', () => {
  it('should define R.modify', () => {
    expect.assertions(1);

    expect(R.modify).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.modify', () => {
    expect.assertions(1);
  });
});
