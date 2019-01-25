/**
 *  @desc Returns the element at the given index. A negative index counts
 *  from the end of the array. Returns `null` if the index is out of range.
 *
 *  @param {Array} array
 *  @param {number} index - The index of the item to get from the array. A
 *      negative value counts from the end of the array.
 *
 *  @return {*} The array item at the given index.
 *
 *  @example
 *  at([1, 2, 3], 1); // 2
 *  at([1, 2, 3], -1); // 3
 *
 *  @example
 *  citrine([1, 2, 3]).at(1); // 2
 *  citrine([1, 2, 3]).at(-1); // 3
 */
export default function at(array, index) {
    if (index < 0) {
        index += array.length;
    }

    if (index < 0 || index >= array.length) {
        return null;
    }

    return array[index];
}
