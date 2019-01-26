import bsearchIndex from '../bsearchIndex';

export default function bsearch(array, callback) {
    const index = bsearchIndex(array, callback);
    return index === null ? null : array[index];
}
