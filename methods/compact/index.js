export default function compact(array) {
    return array.filter(
        item => item !== null && item !== undefined
    );
}
