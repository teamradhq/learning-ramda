import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       clone
 * Category:   object
 * 
 * Creates a deep copy of the source that can be used in place of the source
 * object without retaining any references to it.
 * The source object may contain (nested) Arrays and Objects,
 * Numbers, Strings, Booleans and Dates.
 * Functions are assigned by reference rather than copied.
 * Dispatches to a clone method if present.
 * Note that if the source object has multiple nodes that share a reference,
 * the returned object will have the same structure, but the references will
 * be pointed to the location within the cloned value.
 * 
 * 
 * ```typescript
 * const objects = [{}, {}, {}];
 * const objectsClone = R.clone(objects);
 * objects === objectsClone; //=> false
 * objects[0] === objectsClone[0]; //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#clone}
 */
describe('object.clone', () => {
  it('should define R.clone', () => {
    expect.assertions(1);

    expect(R.clone).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.clone', () => {
    expect.assertions(1);
  });
});
