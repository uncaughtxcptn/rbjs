export default function eql(array, other) {
    if (array === other) {
        return true;
    } else if (!(other instanceof Array) || array.length !== other.length) {
        return false;
    }

    for (let i = 0, l = array.length; i < l; i++) {
        if (array[i] !== other[i] && !eql(array[i], other[i])) {
            return false;
        }
    }

    return true;
}
