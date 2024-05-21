import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       props
 * Category:   object
 * 
 * Acts as multiple prop: array of keys in, array of values out. Preserves
 * order.
 * 
 * 
 * ```typescript
 * R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 * R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 * 
 * const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 * fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#props}
 * {@see https://ramdajs.com/docs/#prop,
                pluck,
                project}
 */
describe('object.props', () => {
  it('should define R.props', () => {
    expect.assertions(1);

    expect(R.props).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.props', () => {
    expect.assertions(1);
  });
});
