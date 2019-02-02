import test from 'ava';
import concat from '.';

test('returns the array itself', t => {
    const ary = [1, 2, 3];
    t.is(
        concat(ary, [4, 5, 6]),
        ary
    );
});

test('append the elements in the other array', t => {
    const ary = [1, 2, 3];
    t.deepEqual(
        concat(ary, [9, 10, 11]),
        ary
    );
    t.deepEqual(
        ary,
        [1, 2, 3, 9, 10, 11]
    );
    t.deepEqual(
        concat(ary, []),
        [1, 2, 3, 9, 10, 11]
    );
});

test('does not loop endlessly when the argument is the original array', t => {
    const ary = ['x', 'y'];
    t.deepEqual(
        concat(ary, ary),
        ['x', 'y', 'x', 'y']
    );
});

test('appends elements to an array with that has been shifted/popped/spliced', t => {
    const ary = [1, 2, 3, 4, 5];
    ary.splice(0, 2);
    ary.splice(-2, 2);
    t.deepEqual(
        concat(ary, [5, 6]),
        [3, 5, 6]
    );
});

test('concatenates the initial value when given arguments contain multiple arguments', t => {
    const ary = [1, 2];
    t.deepEqual(
        concat(ary, ary, ary),
        [1, 2, 1, 2, 1, 2, 1, 2]
    );
});

test('returns self when given no other arrays', t => {
    const ary = [1, 2];
    t.deepEqual(
        concat(ary),
        [1, 2]
    );
});

test('throws exception when arguments are not arrays', t => {
    t.throws(() => {
        concat([1, 2], 3);
    }, TypeError);
});
