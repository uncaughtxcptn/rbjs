import test from 'ava';
import bsearchIndex from '.';

test('find-minimum mode: return index of minimum item that makes the condition return true', t => {
    t.is(bsearchIndex([1], x => x > 0), 0);
    t.is(bsearchIndex([0, 4, 7, 10, 12], x => x >= 4), 1);
    t.is(bsearchIndex([0, 4, 7, 10, 12], x => x >= 6), 2);
    t.is(bsearchIndex([0, 4, 7, 10, 12], x => x >= -1), 0);
    t.is(bsearchIndex([1, 2, 3, 4, 5, 6, 7, 8], x => x > 6), 6);
});

test('find-minimum mode: return null if no item makes the condition return true', t => {
    t.is(bsearchIndex([1], x => x < 0), null);
    t.is(bsearchIndex([0, 4, 7, 10, 12], x => x >= 100), null);
});

test('find-any mode: return index of any item that makes the condition return 0', t => {
    t.true([1, 2].includes(bsearchIndex(
        [0, 4, 7, 10, 12],
        x => 1 - Math.floor(x / 4)
    )));

    t.true([1].includes(bsearchIndex(
        [1, 2, 3, 4, 5],
        x => 2 - x
    )));
});

test('find-any mode: return null if no item makes the condition return 0', t => {
    t.is(bsearchIndex([1, 2, 3], () => 1), null);
    t.is(bsearchIndex([1, 2, 3], () => -1), null);
    t.is(
        bsearchIndex(
            [0, 4, 7, 10, 12],
            x => 4 - Math.floor(x / 2)
        ),
        null
    );
});
