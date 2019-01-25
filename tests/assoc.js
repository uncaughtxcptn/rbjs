import test from 'ava';
import assoc from '../methods/assoc';

test('return the first array whose first element is the given object', t => {
    t.deepEqual(
        assoc([
            ['colors', 'red', 'blue', 'green'],
            ['letters', 'a', 'b', 'c'],
            ['letters', 'd', 'e', 'f'],
            'foo'
        ], 'letters'),
        ['letters', 'a', 'b', 'c']
    );
});

test('return null if no item is an array with the given object as its first element', t => {
    t.is(
        assoc([
            ['colors', 'red', 'blue', 'green'],
            ['letters', 'a', 'b', 'c'],
            'foo'
        ], 'numbers'),
        null
    );
});

test('ignore non-array items', t => {
    t.is(
        assoc([
            ['colors', 'red', 'blue', 'green'],
            ['letters', 'a', 'b', 'c'],
            'foo'
        ], 'foo'),
        null
    );
});

test('ignore empty array items', t => {
    t.deepEqual(
        assoc([
            ['colors', 'red', 'blue', 'green'],
            ['letters', 'a', 'b', 'c'],
            [],
            [undefined, null],
            'foo'
        ], undefined),
        [undefined, null]
    );
});
