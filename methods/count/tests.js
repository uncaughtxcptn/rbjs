import test from 'ava';
import count from '.';

test('returns the number of elements', t => {
    const array = ['a', 'b', 'c'];
    t.is(count(array), 3);
});

test('returns the number of elements that equal the argument', t => {
    const array = ['a', 'b', 'c'];
    t.is(count(array, e => e === 'b'), 1);
    t.is(count(array, 'c'), 1);
    array.push(null);
    t.is(count(array, null), 1);
    array.pop();
    t.is(count(array, null), 0);
});

test('returns the number of element for which the block evaluates to true', t => {
    const array = ['a', 'b', 'c'];
    t.is(count(array, e => e !== 'b'), 2);
});
