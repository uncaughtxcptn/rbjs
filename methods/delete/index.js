export default function rbjsDelete(array, object, block) {
    const filtered = array.filter(item => item !== object);

    if (filtered.length === array.length) {
        return typeof block === 'function' ? block() : null;
    }
    return object;
}
