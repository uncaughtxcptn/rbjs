/**
 *  Deletes the element at the specified index, returning the removed element,
 *  or `null` if the index is out of range.
 *
 *  @param {Array} array
 *  @param {Number} index - The index to remove an element from. Can be a
 *      negative value, in which case will start from the end of the array.
 *
 *  @return {*|null} The removed element, or `null` if the index is out
 *      of bounds.
 *
 *  @example
 *  deleteAt([1, 2, 3], 1); // => 2
 *  deleteAt([1, 2, 3], -5); // => null
 *
 *  @example
 *  rbjs([1, 2, 3]).deleteAt(1); // => 2
 *  rbjs([1, 2, 3]).deleteAt(-5); // => null
 */
export default function deleteAt(array, index) {
    index = index < 0 ? array.length + index : index;

    return index >= 0 && index < array.length
        ? array.splice(index, 1)[0]
        : null;
}
