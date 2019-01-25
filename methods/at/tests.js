import test from 'ava';
import at from '.';

test('return item at array index', t => {
    t.is(at([1, 2, 3, 4, 5], 2), 3);
});

test('when given negative index, count from the end', t => {
    t.is(at([1, 2, 3, 4, 5], -2), 4);
});

test('return null when index is out of bounds', t => {
    t.is(at([1, 2, 3, 4, 5], 5), null);
    t.is(at([1, 2, 3, 4, 5], -6), null);
});
