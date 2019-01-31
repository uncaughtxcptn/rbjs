/* eslint-disable consistent-return */
export default function cycle(array, callback, count=null) {
    if (array.length === 0 || count === 0) {
        return null;
    } else if (count !== null && typeof count !== 'number') {
        throw new TypeError('Optional `count` parameter needs to be a number.');
    }

    count = count ? Math.floor(count) : count;

    while (count === null || count-- > 0) {
        array.forEach(callback);
    }
}
