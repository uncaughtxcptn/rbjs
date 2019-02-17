import test from 'ava';
import dropWhile from '.';


test('removes elements from the start of the array while the block evaluates to true', t => {
    t.deepEqual(
        dropWhile([1, 2, 3, 4], e => e < 4),
        [4]
    );
});


test('removes elements from the start of the array until the block returns null', t => {
    t.deepEqual(
        dropWhile([1, 2, 3, null, 5], n => n),
        [null, 5]
    );
});


test('removes the elements from the start of the array until the block returns false', t => {
    t.deepEqual(
        dropWhile([1, 2, 3, false, 5], n => n),
        [false, 5]
    );
});
