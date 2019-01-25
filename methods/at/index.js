export default function at(array, index) {
    if (index < 0) {
        index += array.length;
    }

    if (index < 0 || index >= array.length) {
        return null;
    }

    return array[index];
}
