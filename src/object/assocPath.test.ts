import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       assocPath
 * Category:   object
 * 
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 * 
 * 
 * ```typescript
 * R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 * 
 * // Any missing or non-object keys in path will be overridden
 * R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#assocPath}
 * {@see https://ramdajs.com/docs/#dissocPath}
 */
describe('object.assocPath', () => {
  it('should define R.assocPath', () => {
    expect.assertions(1);

    expect(R.assocPath).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.assocPath', () => {
    expect.assertions(1);
  });
});
