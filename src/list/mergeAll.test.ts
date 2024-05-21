import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mergeAll
 * Category:   list
 * 
 * Creates one new object with the own properties from a list of objects.
 * If a key exists in more than one object, the value from the last
 * object it exists in will be used.
 * 
 * 
 * ```typescript
 * R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 * R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mergeAll}
 * {@see https://ramdajs.com/docs/#reduce}
 */
describe('list.mergeAll', () => {
  it('should define R.mergeAll', () => {
    expect.assertions(1);

    expect(R.mergeAll).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mergeAll', () => {
    expect.assertions(1);
  });
});
