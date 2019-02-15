import test from 'ava';
import dig from '.';

test('returns "at" index with one argument', t => {
    const array = ['a'];
    t.is(dig(array, 0), 'a');
    t.is(dig(array, 1), null);
});


test('recurses array elements', t => {
    const array = [[1, [2, '3']]];
    t.is(dig(array, 0, 0), 1);
    t.is(dig(array, 0, 1, 1), '3');
    t.is(dig(array, 0, -1, 0), 2);
});


test('returns the nested value specified if the sequence includes a key', t => {
    const array = [[1, {foo: 'bar'}]];
    t.is(dig(array, 0, 1, 'foo'), 'bar');
});


test('raises a TypeError for a non-numeric index', t => {
    const array = ['a'];
    t.throws(() => {
        dig(array, null);
    }, TypeError);
    t.throws(() => {
        dig(array, true);
    });
});
