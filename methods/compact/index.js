/**
 *  Returns a copy of the given array, with all the `null` and `undefined`
 *  items removed.
 *
 *  @param {Array} array
 *
 *  @return {Array} A copy of the given array without the `null` and
 *      `undefined` items.
 *
 *  @example
 *  compact([1, 2, undefined, 3, null, 4, 5]); // [1, 2, 3, 4, 5]
 *
 *  @example
 *  rbjs([1, 2, undefined, 3, null, 4, 5]).compact(); // [1, 2, 3, 4, 5]
 */
export default function compact(array) {
    return array.filter(
        item => item !== null && item !== undefined
    );
}
