/**
 * Drops first n elements from array
 * and returns the rest of the elements in an array.
 *
 * If a negative number is given, raises a TypeError: Invalid arguments.
 *
 * @param {Array} array
 * @param {number} count - First n elements to remove from array
 *
 * @return {Array} The rest of the elements in the array
 *
 * @example
 * drop([1, 2, 3, 4, 5], 2);  // => [3, 4, 5]
 * drop([1, 2], 3); // => []
 *
 * @example
 * rbjs([1, 2, 3, 4, 5]).drop(2); // => [3, 4, 5]
 * rbjs([1, 2]).drop(3); // => []
 */
export default function drop(array, count) {
    if (count < 0) {
        throw new TypeError('Invalid arguments');
    }
    return array.slice(count);
}
