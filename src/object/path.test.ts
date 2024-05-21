import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       path
 * Category:   object
 * 
 * Retrieves the value at a given path. The nodes of the path can be arbitrary strings or non-negative integers.
 * For anything else, the value is unspecified. Integer paths are meant to index arrays, strings are meant for objects.
 * 
 * 
 * ```typescript
 * R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 * R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 * R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 * R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 * R.path([2], {'2': 2}); //=> 2
 * R.path([-2], {'-2': 'a'}); //=> undefined
 * ```
 * 
 * {@see https://ramdajs.com/docs/#path}
 * {@see https://ramdajs.com/docs/#prop,
                nth,
                assocPath,
                dissocPath}
 */
describe('object.path', () => {
  it('should define R.path', () => {
    expect.assertions(1);

    expect(R.path).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.path', () => {
    expect.assertions(1);
  });
});
