export default function any(array, predicate) {
    predicate = predicate || (item => item);
    return array.some(predicate);
}
