export default function citrine(array) {
    if (!(array instanceof Array)) {
        throw new TypeError('Argument "array" needs to be of type Array');
    }

    return new Proxy(array, {});
}
