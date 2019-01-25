import test from 'ava';
import any from '../methods/any';

test('no predicate given, return false if array is empty', t => {
    t.false(any([]));
});

test('no predicate given, return false if all values are falsey', t => {
    t.false(any([0, false, null, undefined]));
});

test('no predicate given, return true if a value is truthy', t => {
    t.true(any([0, false, null, undefined, true]));
});

test('predicate given, return false if array is empty', t => {
    t.false(any(
        [],
        item => Boolean(item)
    ));
});

test('predicate given, return false if predicate always returns false', t => {
    t.false(any(
        [0, false, null, undefined],
        item => Boolean(item)
    ));
});

test('predicate given, return true if predicate returns true', t => {
    t.true(any(
        [0, false, null, undefined, true],
        item => Boolean(item)
    ));
});
