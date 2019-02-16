import test from 'ava';
import drop from '.';


test('removes the specified number of elements from the start of the array', t => {
    t.deepEqual(
        drop([1, 2, 3, 4, 5], 2),
        [3, 4, 5]
    );
});


test('raises a RangeError: argument error if the number of elements specified is negative', t => {
    const error = t.throws(() => {
        drop([1, 2], -3);
    }, RangeError);

    t.is(error.message, 'Invalid arguments');
});


test('returns an empty array if all elements are dropped', t => {
    t.deepEqual(
        drop([1, 2], 2),
        []
    );
});


test('returns an empty array when called on an empty array', t => {
    t.deepEqual(
        drop([], 0),
        []
    );
});


test('does not remove any elements when passed zero', t => {
    t.deepEqual(
        drop([1, 2], 0),
        [1, 2]
    );
});


test('returns an empty array when more elements are dropped than there is', t => {
    t.deepEqual(
        drop([1, 2], 3),
        []
    );
});


// TODO: Enable when rbjs 'shift' is implemented
test('acts correctly after a shift', t => {
    const array = [null, 1, 2];
    // Shift(array);
    array.shift();
    t.deepEqual(
        drop(array, 1),
        [2]
    );
});
