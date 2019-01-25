import test from 'ava';
import append from '../methods/append';

test('add a single object to the end of the array', t => {
    t.deepEqual(
        append([1, 2], 3),
        [1, 2, 3]
    );

    t.deepEqual(
        append([1, 2], [3, 4]),
        [1, 2, [3, 4]]
    );
});

test('add multiple objects to the end of the array', t => {
    t.deepEqual(
        append([1, 2], 3, 4, 5),
        [1, 2, 3, 4, 5]
    );
});

test('return an array', t => {
    t.true(append([1, 2], 3) instanceof Array);
});
