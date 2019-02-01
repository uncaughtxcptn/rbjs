/**
 * Appends the elements of `otherArrays` into the given array.
 *
 * @param {Array} ary
 * @param {...*} otherArrays
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
export default function concat(ary, ...otherArrays) {
    otherArrays.forEach(otherArray => {
        try {
            ary.push(...otherArray);
        } catch (e) {
            if (e instanceof TypeError) {
                throw new TypeError('Members of `otherArrays` must be an array instance');
            }
            throw e;
        }
    });
    return ary;
}
