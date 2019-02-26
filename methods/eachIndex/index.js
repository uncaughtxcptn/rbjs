/**
 *  Iterates the items of the array and passes their index to the callback.
 *
 *  @param {Array} array
 *  @param {Function} callback - The function that will be passed the indeces
 *      of each array item.
 *
 *  @return {Array} The original given array.
 *
 *  @example
 *  eachIndex(['a', 'b', 'c'], i => console.log(i)); // prints: 0 1 2
 *
 *  @example
 *  rbjs(['a', 'b', 'c']).eachIndex(i => console.log(i)); // prints: 0 1 2
 */
export default function eachIndex(array, callback) {
    if (typeof callback !== 'function') {
        throw new TypeError('Parameter "callback" must be a function.');
    }

    array.forEach((item, i) => callback(i));

    return array;
}
