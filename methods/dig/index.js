/**
 * Retrieves the value object corresponding to
 * each `index` objects repeatedly.
 *
 * @param {Array} array
 * @param {...*} indices
 *
 * @return {Object|null}
 *
 * @example
 * dig([[1, [2, 3]]], 0, 1, 1); // => 2
 *
 * @example
 *
 */
export default function dig(array, ...indices) {
    let element;
    while (indices.length > 0) {
        let index = indices.shift();
        if (index === null || index === undefined
            || (['number', 'string'].some(e => typeof index === e)) === false
        ) {
            throw new TypeError('Index must be a number or a string');
        }
        index = index < 0 ? index + array.length : index;
        element = array[index];
        if (element === undefined) {
            element = null;
            break;
        }
        array = element;
    }
    return element;
}
