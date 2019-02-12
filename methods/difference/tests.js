import test from 'ava';
import difference from '.';

test('returns the original array when called without any parameter', t => {
    const array = [1, 2, 3, 2];
    t.deepEqual(array, difference(array));
});

test('accepts multiple arguments', t => {
    const array = [1, 2, 3, 1];
    t.deepEqual(difference(array, [], [0, 1], [3, 4], [3]), [2]);
});
