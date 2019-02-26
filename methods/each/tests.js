import test from 'ava';
import each from '.';

test('pass each array item to the callback that expects a single parameter', t => {
    const values = [];
    each([1, [2, 3], 4], x => values.push(x));

    t.deepEqual(values, [1, [2, 3], 4]);
});

test('pass each array item\'s items to the callback that expects multiple parameters', t => {
    const values = [];
    each([[1, 2], [3, 4], [5, 6]], (x, y) => values.push([x, y]));

    t.deepEqual(values, [[1, 2], [3, 4], [5, 6]]);
});

test('pass each array item to the callback if item is not another array', t => {
    const values = [];

    // eslint-disable-next-line no-unused-vars
    each([[1, 2], 3, [4, 5], 6], (x, y) => values.push(x));

    t.deepEqual(values, [1, 3, 4, 6]);
});

test('throws TypeError if callback is not provided', t => {
    const error = t.throws(() => {
        each([1, 2, 3]);
    }, TypeError);

    t.is(error.message, 'Parameter "callback" must be a function.');
});

test('returns the given array', t => {
    const array = [1, 2, 3];
    t.is(each(array, x => x), array);
});
