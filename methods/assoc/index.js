export default function assoc(array, obj) {
    return array.find(
        item => item instanceof Array
            && item.length > 0
            && item[0] === obj
    ) || null;
}
