import test from 'ava';
import any from '.';

test('without callback, returns false if the array is empty', t => {
    t.false(any([]));
});

test('without callback, returns false if the array is not empty, but the items in the array are falsy', t => {
    t.false(any([null, undefined, false]));
});

test('without callback, returns true if the array has any truthy items', t => {
    t.true(any([null, undefined, false, true]));
});

test('with callback, returns false if the array is empty', t => {
    t.false(any([], Boolean));
});

test('with callback, returns false if the callback returns falsy for all items of the array', t => {
    t.false(any(
        [null, undefined, false],
        Boolean
    ));
});

test('with callback, returns true if the callback returns truthy for any item of the array', t => {
    t.true(any(
        [null, undefined, false, true],
        Boolean
    ));
});
