/**
 *  Returns whether the array and given array are the same object, or whether
 *  they contain the same items.
 *
 *  @param {Array} array
 *  @param {*} other - The object to be compared to the array.
 *
 *  @return {boolean} Whether the two arrays are the same object or have the
 *      same contents.
 *
 *  @example
 *  eql([1, 2, 3], [1, 2, 3]); // true
 *
 *  @example
 *  rbjs([1, 2, 3]).eql([1, 2, 3]); // true
 */
export default function eql(array, other) {
    if (!(array instanceof Array)
    || !(other instanceof Array)
    || array.length !== other.length) {
        return false;
    } else if (array === other) {
        return true;
    }

    for (let i = 0, l = array.length; i < l; i++) {
        if (array[i] !== other[i] && !eql(array[i], other[i])) {
            return false;
        }
    }

    return true;
}
