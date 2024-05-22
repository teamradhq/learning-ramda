import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       andThen
 * Category:   function
 *
 * Returns the result of applying the onSuccess function to the value inside
 * a successfully resolved promise. This is useful for working with promises
 * inside function compositions.
 *
 *
 * ```typescript
 * const makeQuery = email => ({ query: { email }});
 * const fetchMember = request =>
 *   Promise.resolve({ firstName: 'Bob', lastName: 'Loblaw', id: 42 });
 *
 * //getMemberName :: String -> Promise ({ firstName, lastName })
 * const getMemberName = R.pipe(
 *   makeQuery,
 *   fetchMember,
 *   R.andThen(R.pick(['firstName', 'lastName']))
 * );
 *
 * getMemberName('bob@gmail.com').then(console.log);
 * ```
 *
 * {@see https://ramdajs.com/docs/#andThen}
 * {@see https://ramdajs.com/docs/#otherwise}
 */
describe('function.andThen', () => {
  it('should define R.andThen', () => {
    expect.assertions(1);

    expect(R.andThen).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.andThen', () => {
    expect.assertions(1);
  });
});
