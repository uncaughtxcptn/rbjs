import test from 'ava';
import deleteAt from '.';

test('removes the item at the specified index', t => {
    t.deepEqual(
        deleteAt([1, 2, 3, 4, 5], 2),
        [1, 2, 4, 5]
    );
});

test('returns the removed element at the specified index', t => {
    t.is(deleteAt([1, 2, 3, 4, 5], 2), 3);
});

test('returns null and makes no modifications if the index is out of range', t => {
    t.is(deleteAt([1, 2, 3, 4, 5], 5), null);
});

test('accepts negative indeces', t => {
    t.deepEqual(
        deleteAt([1, 2, 3, 4, 5], -1),
        [1, 2, 3, 4]
    );
    t.deepEqual(
        deleteAt([1, 2, 3, 4, 5], -6),
        [1, 2, 3, 4, 5]
    );
});
