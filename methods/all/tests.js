import test from 'ava';
import all from '.';

test('return true if array is empty', t => {
    t.true(all([]));
});

test('if predicate is given, return true if predicate always returned a truthy value', t => {
    t.true(all(
        [1, 'string', true],
        Boolean
    ));
});

test('if predicate is given, return false if predicate returned any falsy value', t => {
    t.false(all(
        [1, 'string', true, false],
        Boolean
    ));
});

test('if pattern is given, return true if all items are strings that match the pattern', t => {
    t.true(all(
        ['cats', 'dogs', 'cows'],
        /^\w{4}$/
    ));
});

test('if pattern is given, return false if any item is not a string', t => {
    t.false(all(
        ['cats', 'dogs', 'cows', 1],
        /^\w{4}$/
    ));
});

test('if pattern is given, return false if any string item does not match the pattern', t => {
    t.false(all(
        ['cats', 'dogs', 'birds'],
        /^\w{4}$/
    ));
});

test('if predicate or pattern is not given, return true if all items are truthy', t => {
    t.true(all([1, 'string', true]));
});

test('if predicate or pattern is not given, return false if any item is falsy', t => {
    t.false(all([1, 'string', true, false]));
});
