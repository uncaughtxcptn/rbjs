export default function all(array, predicateOrPattern) {
    let predicate = predicateOrPattern;

    if (predicateOrPattern instanceof RegExp) {
        predicate = item => typeof item === 'string'
            && predicateOrPattern.test(item);
    } else if (!predicateOrPattern) {
        predicate = item => item;
    }

    return array.every(predicate);
}
