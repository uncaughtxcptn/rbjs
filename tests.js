import fs from 'fs';
import path from 'path';
import util from 'util';
import test from 'ava';
import rbjs from '.';

const readdir = util.promisify(fs.readdir);

test('proxy array objects', t => {
    const proxied = rbjs([]);
    t.true(proxied.__rbjs__);
});

test('do not proxy and return non-array objects', t => {
    const proxied = rbjs('string');
    t.is(proxied.__rbjs__, undefined);
});

test('proxied array contains all defined methods', async t => {
    const methods = await readdir(path.join(__dirname, 'methods'));
    const proxied = rbjs([]);

    methods.forEach(method => {
        t.true(method in proxied);
        t.is(typeof proxied[method], 'function');
    });
});

test('built-in methods return proxied instances', t => {
    const proxied = rbjs([1, 2, 3, [5, 6, 7]]);
    const doubled = proxied[3].map(x => x * 2);
    t.true(doubled.__rbjs__);
    /*
     * Concordance rules can differentiate between a normal array
     * and a wrapped (proxied) array. See:
     * https://github.com/concordancejs/concordance#comparison-details
     * So we spread the proxied array back to a normal array.
     */
    t.deepEqual([...doubled], [10, 12, 14]);
});

test('non-function properties return the correct values', t => {
    const proxied = rbjs([1, 2, 3, 4, 5]);
    t.is(proxied.length, 5);
});

test('custom methods are chainable', t => {
    const proxied = citrine([
        [1, 2, 3],
        [4, 5, 6]
    ], 4);
    const result = proxied.assoc(4);

    t.deepEqual(result, [4, 5, 6]);
    t.true('any' in result);
    t.notThrows(() => result.any(Boolean));
});
