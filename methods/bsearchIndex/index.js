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
