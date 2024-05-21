import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       forEachObjIndexed
 * Category:   object
 * 
 * Iterate over an input object, calling a provided function fn for each
 * key and value in the object.
 * fn receives three argument: (value, key, obj).
 * 
 * 
 * ```typescript
 * const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 * R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 * // logs x:1
 * // logs y:2
 * ```
 * 
 * {@see https://ramdajs.com/docs/#forEachObjIndexed}
 */
describe('object.forEachObjIndexed', () => {
  it('should define R.forEachObjIndexed', () => {
    expect.assertions(1);

    expect(R.forEachObjIndexed).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.forEachObjIndexed', () => {
    expect.assertions(1);
  });
});
