import fs from 'fs';
import path from 'path';
import util from 'util';
import test from 'ava';
import citrine from '.';

const readdir = util.promisify(fs.readdir);

test('proxy array objects', t => {
    const proxied = citrine([]);
    t.true(proxied.__citrine__);
});

test('do not proxy and return non-array objects', t => {
    const proxied = citrine('string');
    t.is(proxied.__citrine__, undefined);
});

test('proxied array contains all defined methods', async t => {
    const methods = await readdir(path.join(__dirname, 'methods'));
    const proxied = citrine([]);

    methods.forEach(method => {
        t.true(method in proxied);
        t.is(typeof proxied[method], 'function');
    });
});
