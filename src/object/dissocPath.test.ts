import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       dissocPath
 * Category:   object
 * 
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 * 
 * 
 * ```typescript
 * R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#dissocPath}
 * {@see https://ramdajs.com/docs/#assocPath}
 */
describe('object.dissocPath', () => {
  it('should define R.dissocPath', () => {
    expect.assertions(1);

    expect(R.dissocPath).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.dissocPath', () => {
    expect.assertions(1);
  });
});
