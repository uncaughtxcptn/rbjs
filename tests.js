import test from 'ava';
import citrine from '.';

test.only('proxy array objects', t => {
    const proxied = citrine([]);
    t.true(proxied.__citrine__);
});

test('do not proxy and return non-array objects', t => {
    const proxied = citrine('string');
    t.is(proxied.__citrine__, undefined);
});
