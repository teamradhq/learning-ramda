import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       transduce
 * Category:   list
 * 
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 * The iterator function receives two values: (acc, value). It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the R.reduced function.
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 * A transformer is an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * R.identity. The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 * The iteration is performed with R.reduce after initializing the transducer.
 * 
 * 
 * ```typescript
 * const numbers = [1, 2, 3, 4];
 * const transducer = R.compose(R.map(R.add(1)), R.take(2));
 * R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 * 
 * const isOdd = (x) => x % 2 !== 0;
 * const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 * R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#transduce}
 * {@see https://ramdajs.com/docs/#reduce,
                reduced,
                into}
 */
describe('list.transduce', () => {
  it('should define R.transduce', () => {
    expect.assertions(1);

    expect(R.transduce).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.transduce', () => {
    expect.assertions(1);
  });
});
