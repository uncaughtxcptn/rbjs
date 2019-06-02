import test from 'ava';
import eachIndex from '.';

test('passes the index of each item to the callback', t => {
    const results = [];
    const callback = x => results.push(x);

    eachIndex([1, 2, 3, 4, 5], callback);

    t.deepEqual(results, [0, 1, 2, 3, 4]);
});

test('returns the given array', t => {
    const results = [];
    const callback = x => results.push(x);

    const array = [1, 2, 3, 4, 5];

    t.is(array, eachIndex(array, callback));
});

test('throws TypeError if callback is not provided', t => {
    const error = t.throws(() => {
        eachIndex([1, 2, 3, 4, 5]);
    }, TypeError);
    t.is(error.message, 'Parameter "callback" must be a function.');
});
