export default function each(array, callback) {
    if (typeof callback !== 'function') {
        throw new TypeError('Parameter "callback" must be a function.');
    }

    const expectsSingleParam = callback.length === 1;

    array.forEach(item => {
        const isArray = item instanceof Array;

        if (expectsSingleParam || !isArray) {
            callback(item);
        } else {
            callback(...item);
        }
    });

    return array;
}
