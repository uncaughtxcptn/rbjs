/**
 *  Deletes every item of the array for which the given callback
 *  returns `true`.
 *
 *  @param {Array} array
 *  @param {Function} [callback] - A function that returns `true` if the passed
 *      item should be removed from the array.
 *
 *  @return {Array} An array with the desired items removed, or the given array
 *      if callback is not given.
 *
 *  @example
 *  deleteIf([1, 2, 3, 4, 5], x => x < 4); // => [4, 5]
 *
 *  @example
 *  rbjs([1, 2, 3, 4, 5]).deleteIf(x => x < 4); // => [4, 5]
 */
export default function deleteIf(array, callback) {
    return typeof callback === 'function'
        ? array.filter(item => !callback(item))
        : array;
}
