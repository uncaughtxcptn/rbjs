export default function deleteIf(array, callback) {
    return typeof callback === 'function'
        ? array.filter(item => !callback(item))
        : array;
}
