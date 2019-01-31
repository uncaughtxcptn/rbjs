import test from 'ava';
import bsearch from '.';

test('find-minimum mode: return index of minimum item that makes the condition return true', t => {
    t.is(bsearch([1], x => x > 0), 1);
    t.is(bsearch([0, 4, 7, 10, 12], x => x >= 4), 4);
    t.is(bsearch([0, 4, 7, 10, 12], x => x >= 6), 7);
    t.is(bsearch([0, 4, 7, 10, 12], x => x >= -1), 0);
    t.is(bsearch([1, 2, 3, 4, 5, 6, 7, 8], x => x > 6), 7);
});

test('find-minimum mode: return null if no item makes the condition return true', t => {
    t.is(bsearch([1], x => x < 0), null);
    t.is(bsearch([0, 4, 7, 10, 12], x => x >= 100), null);
});

test('find-any mode: return index of any item that makes the condition return 0', t => {
    t.true([4, 7].includes(bsearch(
        [0, 4, 7, 10, 12],
        x => 1 - Math.floor(x / 4)
    )));

    t.true([2].includes(bsearch(
        [1, 2, 3, 4, 5],
        x => 2 - x
    )));
});

test('find-any mode: return null if no item makes the condition return 0', t => {
    t.is(bsearch([1, 2, 3], () => 1), null);
    t.is(bsearch([1, 2, 3], () => -1), null);
    t.is(
        bsearch(
            [0, 4, 7, 10, 12],
            x => 4 - Math.floor(x / 2)
        ),
        null
    );
});
