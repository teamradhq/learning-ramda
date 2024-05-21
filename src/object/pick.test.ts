import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       pick
 * Category:   object
 * 
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 * 
 * 
 * ```typescript
 * R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 * R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#pick}
 * {@see https://ramdajs.com/docs/#omit,
                props}
 */
describe('object.pick', () => {
  it('should define R.pick', () => {
    expect.assertions(1);

    expect(R.pick).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pick', () => {
    expect.assertions(1);
  });
});
