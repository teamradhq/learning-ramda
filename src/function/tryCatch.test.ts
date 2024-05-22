import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       tryCatch
 * Category:   function
 *
 * tryCatch takes two functions, a tryer and a catcher. The returned
 * function evaluates the tryer; if it does not throw, it simply returns the
 * result. If the tryer does throw, the returned function evaluates the
 * catcher function and returns its result. Note that for effective
 * composition with this function, both the tryer and catcher functions
 * must return the same type of results.
 *
 *
 * ```typescript
 * R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 * R.tryCatch(() => { throw 'foo'}, R.always('caught'))('bar') // =>
 * 'caught'
 * R.tryCatch(R.times(R.identity), R.always([]))('s') // => []
 * R.tryCatch(() => { throw 'this is not a valid value'}, (err, value)=>({error : err,  value }))('bar') // => {'error': 'this is not a valid value', 'value': 'bar'}
 * ```
 *
 * {@see https://ramdajs.com/docs/#tryCatch}
 */
describe('function.tryCatch', () => {
  it('should define R.tryCatch', () => {
    expect.assertions(1);

    expect(R.tryCatch).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.tryCatch', () => {
    expect.assertions(1);
  });
});
