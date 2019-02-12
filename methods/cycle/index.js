/* eslint-disable consistent-return */

/**
 *  Calls the given callback for each item `count` times, or forever if `count`
 *  is not given.
 *
 *  Does nothing if a non-positive number is given or the array is empty.
 *
 *  Returns `undefined` if the loop has finished without getting interrupted.
 *
 *  @param {Array} array
 *  @param {Function} callback - Will be called with an item of the given
 *      array.
 *  @param {Number} [count] - The number of times to cycle through the items
 *      of the array.
 *
 *  @example
 *  const callback = item => console.log(item);
 *  cycle([1, 2, 3], callback); // prints: 1, 2, 3, 1, 2, 3,... forever
 *  cycle([1, 2, 3], callback, 2); // prints: 1, 2, 3, 1, 2, 3
 *
 *  @example
 *  const callback = item => console.log(item);
 *  rbjs([1, 2, 3]).cycle(callback); // prints: 1, 2, 3, 1, 2, 3,... forever
 *  rbjs([1, 2, 3]).cycle(callback, 2); // prints: 1, 2, 3, 1, 2, 3
 */
export default function cycle(array, callback, count=null) {
    if (array.length === 0 || count === 0) {
        return null;
    } else if (count !== null && typeof count !== 'number') {
        throw new TypeError('Optional `count` parameter needs to be a number.');
    }

    count = count ? Math.floor(count) : count;

    while (count === null || count-- > 0) {
        array.forEach(callback);
    }
}
