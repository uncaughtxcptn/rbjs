import test from 'ava';
import cycle from '.';

test('returns null when the array is empty and passed is an integer', t => {
    const items = [];
    const callback = item => items.push(item);

    t.is(cycle([], callback, 2), null);
    t.is(items.length, 0);
});

test('returns null when the array is empty and no count is given', t => {
    const items = [];
    const callback = item => items.push(item);

    t.is(cycle([], callback), null);
    t.is(items.length, 0);
});

test('returns null when passed count is 0', t => {
    const items = [];
    const callback = item => items.push(item);

    t.is(cycle([1, 2, 3], callback, 0), null);
    t.is(items.length, 0);
});

test('iterates the array `count` times, passing each item to the callback function', t => {
    const items = [];
    const callback = item => items.push(item);

    cycle([1, 2, 3], callback, 3);

    t.deepEqual(items, [1, 2, 3, 1, 2, 3, 1, 2, 3]);
});

test('iterates indefinitely when no count is given', t => {
    const items = [];
    const callback = item => {
        items.push(item);

        if (items.length === 9) {
            throw new Error();
        }
    };

    try {
        cycle([1, 2, 3], callback);
    } catch (error) {}

    t.deepEqual(items, [1, 2, 3, 1, 2, 3, 1, 2, 3]);
});

test('iterates the array int(count) times when given a float count', t => {
    const items = [];
    const callback = item => items.push(item);

    cycle([1, 2, 3], callback, 3.9);

    t.deepEqual(items, [1, 2, 3, 1, 2, 3, 1, 2, 3]);
});

test('throws a TypeError if passed a string', t => {
    const items = [];
    const callback = item => items.push(item);

    t.throws(() => cycle([1, 2, 3], callback, '3'), TypeError);
    t.is(items.length, 0);
});

test('throws a TypeError if passed an object', t => {
    const items = [];
    const callback = item => items.push(item);

    t.throws(() => cycle([1, 2, 3], callback, {}), TypeError);
    t.is(items.length, 0);
});

test('throws a TypeError if passed true', t => {
    const items = [];
    const callback = item => items.push(item);

    t.throws(() => cycle([1, 2, 3], callback, true), TypeError);
    t.is(items.length, 0);
});
