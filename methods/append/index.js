/**
 *  @desc Appends the given object(s) on to the end of the given array.
 *
 *  @param {Array} array
 *  @param {...*} args - The items to append to the array
 *
 *  @return {Array} The array with the new items appended to the end
 *
 *  @example
 *  append([1, 2], 3); // => [1, 2, 3]
 *  append([1, 2], 3, 4, 5); // => [1, 2, 3, 4, 5]
 *
 *  @example
 *  rbjs([1, 2]).append(3); // => [1, 2, 3]
 *  rbjs([1, 2]).append(3, 4, 5); // => [1, 2, 3, 4, 5]
 */
export default function append(array, ...args) {
    return array.concat(args);
}
