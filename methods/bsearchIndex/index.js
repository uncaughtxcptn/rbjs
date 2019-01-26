export default function bsearchIndex(array, callback) {
    const index = (function search(arr, cb, idx) {
        if (arr.length === 0) {
            return idx;
        }

        const i = Math.floor(arr.length / 2);
        const result = callback(arr[i]);

        return result
            ? search(arr.slice(0, i), cb, idx)
            : search(arr.slice(i + 1), cb, idx + i + 1);
    })(array, callback, 0);

    return index === array.length ? null : index;
}
