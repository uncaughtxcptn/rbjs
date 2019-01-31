/**
 *  By using binary search, finds an index of a value from this array which
 *  meets the given condition in **`O(log n)`** where `n` is the length of the
 *  array.
 *
 *  You can use this method in two modes: a **find-minimum mode** and a
 *  **find-any mode**. In either case, the elements of the array must be
 *  monotone (or sorted) with respect to the given callback.
 *
 *  In **find-minimum mode** (this is a good choice for typical use cases), the
 *  callback must always return `true` or `false`, and there must be an index
 *  **`i`** `(0 <= i <= array.length)` so that:
 *  - the callback returns `false` for any element whose index is less
 *      than `i`, and
 *  - the callback returns `true` for any element whose index is greater
 *      than or equal to `i`.
 *
 *  This method returns the index `i`. If i is equal to `array.length`, it
 *  returns `null`.
 *
 *  In **find-any mode**, the callback must always return a number, and there
 *  must be two indices **`i`** and **`j`** `(0 <= i <= j <= array.length)`
 *  so that:
 *  - the callback returns a positive number if `0 <= k < i`,
 *  - the callback returns zero if `i <= k < j`, and
 *  - the callback returns a negative number if `j <= k < array.length`.
 *
 *  Under this condition, this method returns any index within `i...j`.
 *  If `i` is equal to `j` (i.e., there is no element that satisfies the
 *  callback), this method returns `null`.
 *
 *  You must not mix the two modes at a time; the block must always return
 *  either `true`/`false`, or always return a number. It is undefined which
 *  value is actually picked up at each iteration.
 *
 *  @param {Array} array
 *  @param {Function} callback - This should return a boolean for
 *      **find-minimum mode**, and a number for **find-any mode**.
 *
 *  @return {number} The corresponding index an element that satisfies the
 *      given callback.
 *
 *  @example
 *  bsearchIndex([0, 4, 7, 10, 12], x => x >= 4); // => 1
 *  bsearchIndex([1, 2, 3, 4, 5], x => 2 - x); // => 1
 *
 *  @example
 *  rbjs([0, 4, 7, 10, 12]).bsearchIndex(x => x >= 4); // => 1
 *  rbjs([1, 2, 3, 4, 5]).bsearchIndex(x => 2 - x); // => 1
 */
export default function bsearchIndex(array, callback) {
    const [i, j] = (function search(arr, cb, _i, _j) {
        if (arr.length === 0) {
            return [_i, _j];
        }

        const idx = Math.floor(arr.length / 2);
        const result = cb(arr[idx]);

        if (result === true) {
            // Find-minimum mode: traverse left subtree
            return search(arr.slice(0, idx), cb, _i, _j);
        } else if (result === false) {
            // Find-minimum mode: traverse right subtree
            return search(arr.slice(idx + 1), cb, _i + idx + 1, _j);
        } else if (result < 0) {
            // Find-any mode: traverse left subtree
            return search(arr.slice(0, idx), cb, Math.min(_i, idx), idx);
        } else if (result > 0) {
            // Find-any mode: traverse right subtree
            return search(arr.slice(idx + 1), cb, (_i += idx + 1), Math.max(_j, _i));
        }
        // Find-any mode: return the index of any item that makes the given
        // callback return 0.
        return [(_i += idx), _j];
    })(array, callback, 0, -1);

    // Find-minimum mode: return null if i === array.length
    // Find-any mode: return null if i === j
    return i === array.length || i === j ? null : i;
}
