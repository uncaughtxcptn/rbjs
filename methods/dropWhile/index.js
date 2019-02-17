import drop from '../drop';

/**
 * Drops elements up to, but not including, the first element
 * for which the predicate returns null or false
 * and returns an array containing the remaining elements.
 *
 * If no predicate is given, the array is returned instead.
 * @param {Array} array
 * @param {Function} predicate
 *
 * @return {Array} array containing the remaining elements
 *
 * @example
 * dropWhile([1, 2, 3, 4, 5, 0], x => x < 3); // => [3, 4, 5, 0]
 *
 * @example
 * rbjs([1, 2, 3, false, 5].dropWhile(x => x < 3);  // => [false, 5]
*/
export default function dropWhile(array, predicate) {
    if (!predicate) {
        return array;
    }
    const index = array.findIndex(x => !predicate(x));
    return drop(array, index);
}
