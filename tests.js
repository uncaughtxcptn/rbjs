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
