import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       dropLastWhile
 * Category:   list
 * 
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a falsy value. The predicate function is applied to one argument:
 * (value).
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const lteThree = x => x <= 3;
 * 
 * R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 * 
 * R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#dropLastWhile}
 * {@see https://ramdajs.com/docs/#takeLastWhile,
                addIndex,
                drop,
                dropWhile}
 */
describe('list.dropLastWhile', () => {
  it('should define R.dropLastWhile', () => {
    expect.assertions(1);

    expect(R.dropLastWhile).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.dropLastWhile', () => {
    expect.assertions(1);
  });
});
