export default function dig(array, ...indices) {
    let element;
    while (indices.length > 0) {
        let index = indices.shift();
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
