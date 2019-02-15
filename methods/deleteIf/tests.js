import test from 'ava';
import deleteIf from '.';

test('removes each item for which the callback returns true', t => {
    t.deepEqual(
        deleteIf([1, 2, 3, 4, 5], x => x < 4),
        [4, 5]
    );
});

test('if no callback is given, returns the given array', t => {
    t.deepEqual(
        deleteIf([1, 2, 3, 4, 5]),
        [1, 2, 3, 4, 5]
    );
});
