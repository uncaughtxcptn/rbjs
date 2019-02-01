/**
 * Appends the elements of `otherArrays` into the given array.
 *
 * @param {Array} array1
 * @param {...any} otherArrays
 *
 * @return {Array} Returns the array itself.
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
 * concat(['a', 'b'], ['c'], ['d', 'e']) // => ['a', 'b', 'c', 'd', 'e']
 *
 * @example
 * rbjs([1, 2]).concat([3, 4]); // => [1, 2, 3, 4]
 * rbjs(['a', 'b']).concat(['c', 'd'], ['e'])  // => ['a', 'b', 'c', 'd', 'e']
 */
export default function concat(array1, ...otherArrays) {
    otherArrays.filter(x => x instanceof Array).forEach(otherArray => {
        array1.push(...otherArray);
    });
    return array1;
}
