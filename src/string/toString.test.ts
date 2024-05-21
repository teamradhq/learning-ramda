import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       toString
 * Category:   string
 * 
 * Returns the string representation of the given value. eval'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * toString methods do not satisfy this requirement.
 * If the given value is an [object Object] with a toString method other
 * than Object.prototype.toString, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable toString method. For example:
 * function Point(x, y) {
 *   this.x = x;
 *   this.y = y;
 * }
 * 
 * Point.prototype.toString = function() {
 *   return 'new Point(' + this.x + ', ' + this.y + ')';
 * };
 * 
 * R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 * 
 * 
 * 
 * ```typescript
 * function Point(x, y) {
 *   this.x = x;
 *   this.y = y;
 * }
 * 
 * Point.prototype.toString = function() {
 *   return 'new Point(' + this.x + ', ' + this.y + ')';
 * };
 * 
 * R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 * 
 * ```
 * 
 * {@see https://ramdajs.com/docs/#toString}
 */
describe('string.toString', () => {
  it('should define R.toString', () => {
    expect.assertions(1);

    expect(R.toString).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.toString', () => {
    expect.assertions(1);
  });
});