/**
 *  @desc Searches through an array whose elements are also arrays comparing
 *  `obj` with the first element of each contained array.
 *
 *  @param {Array} array
 *  @param {*} obj - The object to be compared against the first element of
 *      each child array.
 *
 *  @return {Array|null} Returns the first contained array whose first element
 *  matches the given `obj`, or `null` if no match is found.
 *
 *  @example
 *  assoc([
 *      ['colors', 'red', 'blue', 'green'],
 *      ['letters', 'a', 'b', 'c'],
 *      'foo'
 *  ], 'letters');
 *  // => ['letters', 'a', 'b', 'c']
 *
 *  @example
 *  citrine([
 *      ['colors', 'red', 'blue', 'green'],
 *      ['letters', 'a', 'b', 'c'],
 *      'foo'
 *  ]).assoc('letters');
 *  // => ['letters', 'a', 'b', 'c']
 */
export default function assoc(array, obj) {
    return array.find(
        item => item instanceof Array
            && item.length > 0
            && item[0] === obj
    ) || null;
}
