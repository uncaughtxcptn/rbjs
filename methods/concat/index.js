
export default function concat(array1, ...otherArrays) {
    otherArrays.forEach(arr => {
        array1.push(...arr);
    });
    return array1;
}
