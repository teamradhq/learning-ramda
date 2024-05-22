import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       memoizeWith
 * Category:   function
 *
 * Takes a string-returning function keyGen and a function fn and returns
 * a new function that returns cached results for subsequent
 * calls with the same arguments.
 * When the function is invoked, keyGen is applied to the same arguments
 * and its result becomes the cache key. If the cache contains something
 * under that key, the function simply returns it and does not invoke fn at all.
 * Otherwise fn is applied to the same arguments and its return value
 * is cached under that key and returned by the function.
 * Care must be taken when implementing keyGen to avoid key collision,
 * or if tracking references, memory leaks and mutating arguments.
 *
 *
 * ```typescript
 * const withAge = memoizeWith(o => `${o.birth}/${o.death}`, ({birth, death}) => {
 * //                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^
 * //                          keyGen                        fn
 *   console.log(`computing age for ${birth}/${death}`);
 *   return ({birth, death, age: death - birth});
 * });
 *
 * withAge({birth: 1921, death: 1999});
 * //=> LOG: computing age for 1921/1999
 * //=> {birth: 1921, death: 1999, age: 78} (returned from fn)
 *
 * withAge({birth: 1921, death: 1999});
 * //=> {birth: 1921, death: 1999, age: 78} (returned from cache)
 * ```
 *
 * {@see https://ramdajs.com/docs/#memoizeWith}
 */
describe('function.memoizeWith', () => {
  it('should define R.memoizeWith', () => {
    expect.assertions(1);

    expect(R.memoizeWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.memoizeWith', () => {
    expect.assertions(1);
  });
});
