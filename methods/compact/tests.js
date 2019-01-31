import test from 'ava';
import compact from '.';

test('removes undefined values from the array', t => {
    t.deepEqual(
        compact([1, 2, undefined, 3, undefined, 4, 5]),
        [1, 2, 3, 4, 5]
    );
});

test('removes null values from the array', t => {
    t.deepEqual(
        compact([1, 2, null, 3, null, 4, 5]),
        [1, 2, 3, 4, 5]
    );
});
