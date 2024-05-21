import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       hasIn
 * Category:   object
 * 
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 * 
 * 
 * ```typescript
 * function Rectangle(width, height) {
 *   this.width = width;
 *   this.height = height;
 * }
 * Rectangle.prototype.area = function() {
 *   return this.width * this.height;
 * };
 * 
 * const square = new Rectangle(2, 2);
 * R.hasIn('width', square);  //=> true
 * R.hasIn('area', square);  //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#hasIn}
 */
describe('object.hasIn', () => {
  it('should define R.hasIn', () => {
    expect.assertions(1);

    expect(R.hasIn).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.hasIn', () => {
    expect.assertions(1);
  });
});
