/**
 *  @desc Passes each element of the array to the given function, and checks if
 *  any of the items makes the given function return a truthy value, or if any
 *  of the items is a truthy value.
 *
 *  @param {Array} array
 *  @param {Function} [predicate] - This function will be called for each array
 *      item. If this function ever returns a truthy value, `any` returns
 *      `true`.<br>If not given, defaults to `item => item`.
 *
 *  @return {boolean} Whether any of the items in the array is a truthy value
 *  or made the given function return a truthy value.
 *
 *  @example
 *  any([null, undefined, true], Boolean); // true
 *
 *  @example
 *  citrine([null, undefined, true]).any(Boolean); // true
 */
export default function any(array, predicate) {
    predicate = predicate || (item => item);
    return array.some(predicate);
}
