/**
 *  Invokes the given function once for each element of the array. Returns an
 *  array containing the values returned by the given function.
 *
 *  @param {Array} array
 *  @param {Function} callback - Will be called for each item of the array. The
 *      returned value of this function will be the corresponding item in the
 *      resulting array.
 *
 *  @return {Array} A new array containing the returned values of the given
 *      function.
 *
 *  @example
 *  collect([1, 2, 3], x => x * 2); // => [2, 4, 6]
 *  collect(['a', 'b', 'c'], x => `${x}!`); // => ['a!', 'b!', 'c!']
 *
 *  @example
 *  rbjs([1, 2, 3]).collect(x => x * 2); // => [2, 4, 6]
 *  rbjs(['a', 'b', 'c']).collect(x => `${x}!`); // => ['a!', 'b!', 'c!']
 */
export default function collect(array, callback) {
    return typeof callback === 'function'
        ? array.map(callback)
        : array;
}
