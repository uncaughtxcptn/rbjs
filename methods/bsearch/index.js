import bsearchIndex from '../bsearchIndex';

/**
 *  By using binary search, finds an a value from this array which meets the
 *  given condition in **`O(log n)`** where `n` is the length of the array.
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
 *  This method returns the `i`-th element. If i is equal to `array.length`,
 *  it returns `null`.
 *
 *  In **find-any mode**, the callback must always return a number, and there
 *  must be two indices **`i`** and **`j`** `(0 <= i <= j <= array.length)`
 *  so that:
 *  - the callback returns a positive number if `0 <= k < i`,
 *  - the callback returns zero if `i <= k < j`, and
 *  - the callback returns a negative number if `j <= k < array.length`.
 *
 *  Under this condition, this method returns any element whose index is
 *  within `i...j`. If `i` is equal to `j` (i.e., there is no element that
 *  satisfies the callback), this method returns `null`.
 *
 *  You must not mix the two modes at a time; the block must always return
 *  either `true`/`false`, or always return a number. It is undefined which
 *  value is actually picked up at each iteration.
 *
 *  @param {Array} array
 *  @param {Function} callback - This should return a boolean for
 *      **find-minimum mode**, and a number for **find-any mode**.
 *
 *  @return {*} An array item that satisfies the given callback.
 *
 *  @example
 *  bsearch([0, 4, 7, 10, 12], x => x >= 4); // => 4
 *  bsearch([1, 2, 3, 4, 5], x => 2 - x); // => 2
 *
 *  @example
 *  rbjs([0, 4, 7, 10, 12]).bsearch(x => x >= 4); // => 4
 *  rbjs([1, 2, 3, 4, 5]).bsearch(x => 2 - x); // => 2
 */
export default function bsearch(array, callback) {
    const index = bsearchIndex(array, callback);
    return index === null ? null : array[index];
}
