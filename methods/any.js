/**
 *  @desc Passes each element of the array to the given function, and checks if
 *  any of the items makes the given function return a truthy value, or if any
 *  of the items is a truthy value.<br>If instead a pattern is given, the
 *  method returns whether any string item of the array matches the pattern.
 *
 *  @param {Array} array
 *  @param {Function|RegExp} [predicateOrPattern] - This function will be
 *      called for each array item. If this function ever returns a truthy
 *      value, `any` returns `true`.
 *      <br>If this is a RegExp, `any` will return `true` if any array item is
 *      is a string that matches this pattern.
 *      <br>If not given, defaults to `item => item`.
 *
 *  @return {boolean} Whether any of the items in the array is a truthy value,
 *  or made the given function return a truthy value, or is a string that
 *  matches the given pattern.
 *
 *  @example
 *  any([null, undefined, true], Boolean); // true
 *
 *  @example
 *  citrine([null, undefined, true]).any(Boolean); // true
 */
export default function any(array, predicateOrPattern) {
    let predicate = predicateOrPattern;

    if (predicateOrPattern instanceof RegExp) {
        predicate = item => typeof item === 'string'
            && predicateOrPattern.test(item);
    } else if (!predicateOrPattern) {
        predicate = item => item;
    }

    return array.some(predicate);
}
