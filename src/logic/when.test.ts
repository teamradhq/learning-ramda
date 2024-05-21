import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       when
 * Category:   logic
 * 
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the whenTrueFn function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 * 
 * 
 * ```typescript
 * // truncate :: String -> String
 * const truncate = R.when(
 *   R.propSatisfies(R.gt(R.__, 10), 'length'),
 *   R.pipe(R.take(10), R.append('…'), R.join(''))
 * );
 * truncate('12345');         //=> '12345'
 * truncate('0123456789ABC'); //=> '0123456789…'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#when}
 * {@see https://ramdajs.com/docs/#ifElse,
                unless,
                cond}
 */
describe('logic.when', () => {
  it('should define R.when', () => {
    expect.assertions(1);

    expect(R.when).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.when', () => {
    expect.assertions(1);
  });
});
