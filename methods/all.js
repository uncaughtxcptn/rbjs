/**
 *  @desc Passes each element of the array to the given function, and checks if
 *  all of the items make the given function return a truthy value, or if all
 *  of the items are truthy values.<br>If instead a pattern is given, the
 *  method returns whether all string items of the array match the pattern.
 *
 *  @param {Array} array
 *  @param {Function|RegExp} [predicateOrPattern] - This function will be
 *      called for each array item. If this function always returned truthy
 *      values, `all` returns `true`.
 *      <br>If this is a RegExp, `all` will return `true` if all array items
 *      are strings that match this pattern.
 *      <br>If not given, defaults to `item => item`.
 *
 *  @return {boolean} Whether all of the items in the array are truthy values,
 *  or made the given function always return truthy values, or are strings that
 *  match the given pattern.
 *
 *  @example
 *  all([1, 'string', true], Boolean); // true
 *
 *  @example
 *  citrine([1, 'string', true]).all(Boolean); // true
 */
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
