/**
 *  Delets all items from the array that are equal to a given object.
 *
 *  Note that since `delete` is a reserved keyword in JavaScript, you must use
 *  a different identifier when importing this method, e.g. `rbjsDelete`.
 *
 *  @param {Array} array
 *  @param {*} object - The item to be removed from the array
 *  @param {Function} [block] - A function whose return value is returned if
 *      the item to be removed is not found.
 *
 *  @return {*} Returns the last deleted item, or `null` if no matching item
 *      is found.
 *
 *  @example
 *  rbjsDelete([1, 2, 2, 3], 2); // => [1, 3]
 *  rbjsDelete([1, 2, 2, 3], 4, () => 'hello'); // => 'hello'
 *
 *  @example
 *  rbjs([1, 2, 2, 3]).delete(2); // => [1, 3]
 *  rbjs([1, 2, 2, 3]).delete(4, () => 'hello'); // => 'hello'
 */
export default function rbjsDelete(array, object, block) {
    const filtered = array.filter(item => item !== object);

    if (filtered.length === array.length) {
        return typeof block === 'function' ? block() : null;
    }
    return object;
}
