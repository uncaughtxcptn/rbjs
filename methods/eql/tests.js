import test from 'ava';
import eql from '.';

test('returns false if not given an array', t => {
    t.false(eql([], {}));
});

test('returns false if any corresponding items are not equal', t => {
    t.false(eql([1, 2, 3], [1, 2, 4]));
    t.false(eql([1, 2, 3], [1, 2, 3, 4]));
});

test('returns true if given array is the same object', t => {
    const array = [1, 2, 3];
    t.true(eql(array, array));
});

test('returns true if all corresponding items are equal', t => {
    t.true(eql([1, 2, 3], [1, 2, 3]));
});

test('checks nested array items', t => {
    t.false(eql([1, 2, [3]], [1, 2, [4]]));
    t.true(eql([[1], [2], 3], [[1], [2], 3]));
});
