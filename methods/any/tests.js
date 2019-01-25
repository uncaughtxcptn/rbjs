import test from 'ava';
import any from '.';

test('return false if array is empty', t => {
    t.false(any([]));
});

test('if predicate is given, return true if predicate returned any truthy value', t => {
    t.true(any(
        [null, undefined, false, true],
        Boolean
    ));
});

test('if predicate is given, return false if predicate always returned a falsy value', t => {
    t.false(any(
        [null, undefined, false],
        Boolean
    ));
});

test('if pattern is given, return true if any item is a string that matches the pattern', t => {
    t.true(any(
        [false, 'dogs', 1234],
        /^\w{4}$/
    ));
});

test('if pattern is given, return false if there is no string item', t => {
    t.false(any(
        [false, undefined, 1234],
        /^\w{4}$/
    ));
});

test('if predicate or pattern is not given, return true if any item is truthy', t => {
    t.true(any([null, undefined, false, true]));
});

test('if predicate or pattern is not given, return false if all items are falsy', t => {
    t.false(any([null, undefined, false]));
});
