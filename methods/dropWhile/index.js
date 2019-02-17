import drop from '../drop';

/**
 * Drops elements up to, but not including, the first element
 * for which the block returns nil or false
 * and returns an array containing the remaining elements.
 *
 * If no block is given, an Enumerator is returned instead.
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
    let index = 0;
    while (predicate(array[index])) {
        index++;
    }
    return drop(array, index);
}
