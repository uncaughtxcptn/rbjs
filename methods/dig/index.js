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
 * rbjs([[1, [2, 3]]]).dig(0, 1, 1); // => 2
 */
export default function dig(array, ...indices) {
    if (indices.length === 0) {
        throw new TypeError('Invalid arguments');
    }
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
