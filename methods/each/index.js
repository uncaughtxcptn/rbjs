/**
 *  Calls the given callback once for each item in the array, passing that item
 *  to the callback.
 *
 *  @param {Array} array
 *  @param {Function} callback - Called and passed each item of the array. If
 *      this callback expects multiple elements and the array item is another
 *      array, each item of that array is passed as individual arguments to the
 *      this callback.
 *
 *  @return {Array} The given array.
 *
 *  @example
 *  each([1, 2, 3], callback); // calls `callback` with 1, 2, then 3
 *
 *  @example
 *  rbjs([1, 2, 3]).each(callback); // calls `callback` with 1, 2, then 3
 */
export default function each(array, callback) {
    if (typeof callback !== 'function') {
        throw new TypeError('Parameter "callback" must be a function.');
    }

    const expectsSingleParam = callback.length === 1;

    array.forEach(item => {
        const isArray = item instanceof Array;

        if (expectsSingleParam || !isArray) {
            callback(item);
        } else {
            callback(...item);
        }
    });

    return array;
}
