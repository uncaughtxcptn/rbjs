/**
* Returns a new array that is a copy of the receiver,
* removing any items that also appear in any of the arrays
* given as arguments.
* The order is preserved from the original array.
*
* @param {Array} array
* @param {...*} otherArrays
*
* @return {Array} Returns the diff array
*
* @example
* difference([1, 1, 2, 2, 3, 3, 4, 5], [1, 2, 4]); // => [ 3, 3, 5 ]
* difference([1, 'c', 'yep'], [1], [ 'a', 'c' ]);  // => ["yep"]
* @example
* rbjs([1, 'c', 'yep']).difference([1], ['a', 'c']) // => ["yep"]
*/
export default function difference(array, ...otherArrays) {
    otherArrays.forEach(otherArray => {
        array = array.filter(el => !otherArray.includes(el));
    });
    return array;
}
