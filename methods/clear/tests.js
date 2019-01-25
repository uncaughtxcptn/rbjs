import test from 'ava';
import clear from '.';

test('return an empty array', t => {
    t.deepEqual(clear([1, 2, 3]), []);
});
