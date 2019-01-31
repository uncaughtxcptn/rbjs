/**
 *  @desc Passes each element of the array to the given function, and checks if
 *  all of the items make the given function return a truthy value, or if all
 *  of the items are truthy values.
 *
 *  @param {Array} array
 *  @param {Function} [predicate] - This function will be called for each array
 *      item. If this function always returned truthy values, `all` returns
 *      `true`. If not given, defaults to `item => item`.
 *
 *  @return {boolean} Whether all of the items in the array are truthy values,
 *  or made the given function always return truthy values.
 *
 *  @example
 *  all([1, 'string', true], Boolean); // true
 *
 *  @example
 *  rbjs([1, 'string', true]).all(Boolean); // true
 */
export default function all(array, predicate) {
    if (arguments.length > 2) {
        throw new Error('Too many arguments provided.');
    } else if (!predicate) {
        predicate = item => item;
    }

    return array.every(predicate);
}
