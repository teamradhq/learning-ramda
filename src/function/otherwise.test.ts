import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       otherwise
 * Category:   function
 * 
 * Returns the result of applying the onFailure function to the value inside
 * a failed promise. This is useful for handling rejected promises
 * inside function compositions.
 * 
 * 
 * ```typescript
 * const failedFetch = id => Promise.reject('bad ID');
 * const useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' });
 * 
 * //recoverFromFailure :: String -> Promise ({ firstName, lastName })
 * const recoverFromFailure = R.pipe(
 *   failedFetch,
 *   R.otherwise(useDefault),
 *   R.andThen(R.pick(['firstName', 'lastName'])),
 * );
 * recoverFromFailure(12345).then(console.log);
 * ```
 * 
 * {@see https://ramdajs.com/docs/#otherwise}
 * {@see https://ramdajs.com/docs/#andThen}
 */
describe('function.otherwise', () => {
  it('should define R.otherwise', () => {
    expect.assertions(1);

    expect(R.otherwise).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.otherwise', () => {
    expect.assertions(1);
  });
});
