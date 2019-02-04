export default function count(array, predicate) {
    if (typeof predicate === 'function') {
        return array.filter(predicate).length;
    }
    return array.length;
}
