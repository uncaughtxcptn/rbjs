import test from 'ava';
import deleteMethod from '.';

test('removes items that are equal to the given object', t => {
    t.deepEqual(deleteMethod([1, 2, 3, 4, 3, 5, 3], 3), 3);
});

test('returns object if any items match the given object', t => {
    t.is(deleteMethod([1, 2, 3, 4, 3, 5, 3], 3), 3);
});

test('returns null if no items match the given object', t => {
    t.is(deleteMethod([1, 2, 3, 4, 3, 5, 3], 6), null);
});

test('may be given a block that is executed if no item matches the given object', t => {
    t.is(
        deleteMethod([1, 2, 3], 4, () => 'this should be returned'),
        'this should be returned'
    );
});
