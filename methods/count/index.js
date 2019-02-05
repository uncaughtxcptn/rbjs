/**
 * Returns the number of elements.
 *
 * If an argument is given, counts the number of elements for which
 * the object or predicate holds true
 *
 * @param {Array} array
 * @param {Function} predicate
 *
 * @example
 * count(['a', 'b', 'c'])  // => 3
 * count(['a', 'b', 'c'], e => e === 'b')  // => 1
 *
 * @example
 * rbjs([1, 2, 3, 4]).count() // => 4
 * rbjs([1, 2, 3, 4]).count(e => e % 2 === 0) // => 2s
 */
export default function count(array, predicate) {
    if (typeof predicate === 'function') {
        return array.filter(predicate).length;
    }
    return array.length;
}
