import test from 'ava';
import all from '.';

test('always returns true on empty array', t => {
    t.true(all([]));
});

test('throws an error when more than two arguments are provided', t => {
    t.throws(() => all([], Boolean, 1), Error);
});

test('without callback, returns true if no items are falsy', t => {
    t.true(all([1, 'string', true]));
});

test('without callback, returns false if there are falsy items', t => {
    t.false(all([1, 'string', true, false]));
});

test('with callback, returns true if the callback never returns a falsy value', t => {
    t.true(all(
        [1, 'string', true],
        Boolean
    ));
});

test('with callback, returns false if the callback ever returns a falsy value', t => {
    t.false(all(
        [1, 'string', true, false],
        Boolean
    ));
});

test('with callback, stops iterating once the return value is determined', t => {
    const items = [];
    const callback = item => {
        items.push(item);
        return Boolean(item);
    };

    all([1, 'string', false, true, {}], callback);

    t.deepEqual(items, [1, 'string', false]);
});
