export default function deleteAt(array, index) {
    index = index < 0 ? array.length + index : index;

    return index >= 0 && index < array.length
        ? array.splice(index, 1)[0]
        : null;
}
