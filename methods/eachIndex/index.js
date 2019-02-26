export default function eachIndex(array, callback) {
    if (typeof callback !== 'function') {
        throw new TypeError('Parameter "callback" must be a function.');
    }

    array.forEach((item, i) => callback(i));

    return array;
}
