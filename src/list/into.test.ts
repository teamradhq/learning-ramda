import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       into
 * Category:   list
 *
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 * The iteration is performed with R.reduce after initializing the
 * transducer.
 *
 *
 * ```typescript
 * const numbers = [1, 2, 3, 4];
 * const transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 * R.into([], transducer, numbers); //=> [2, 3]
 *
 * const intoArray = R.into([]);
 * intoArray(transducer, numbers); //=> [2, 3]
 * ```
 *
 * {@see https://ramdajs.com/docs/#into}
 * {@see https://ramdajs.com/docs/#transduce}
 */
describe('list.into', () => {
  it('should define R.into', () => {
    expect.assertions(1);

    expect(R.into).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.into', () => {
    expect.assertions(1);
  });
});
