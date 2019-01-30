import test from 'ava';
import collect from '.';

test('return values returned by the given function when called with each array item', t => {
    t.deepEqual(
        collect([1, 2, 3], x => x * 2),
        [2, 4, 6]
    );

    t.deepEqual(
        collect(['a', 'b', 'c'], x => `${x}!`),
        ['a!', 'b!', 'c!']
    );
});

test('return the given array when no callback function is given', t => {
    t.deepEqual(
        collect([1, 2, 3]),
        [1, 2, 3]
    );
});
