import all from './methods/all';
import any from './methods/any';
import append from './methods/append';
import assoc from './methods/assoc';
import at from './methods/at';
import bsearch from './methods/bsearch';
import bsearchIndex from './methods/bsearchIndex';
import clear from './methods/clear';
import collect from './methods/collect';
import compact from './methods/compact';
import concat from './methods/concat';
import count from './methods/count';
import cycle from './methods/cycle';
import deleteMethod from './methods/delete';
import deleteAt from './methods/deleteAt';
import deleteIf from './methods/deleteIf';
import difference from './methods/difference';

const handlers = {
    all,
    any,
    append,
    assoc,
    at,
    bsearch,
    bsearchIndex,
    clear,
    collect,
    compact,
    concat,
    count,
    cycle,
    delete: deleteMethod,
    deleteAt,
    deleteIf,
    difference
};

export default function rbjs(toProxy) {
    if (!(toProxy instanceof Array)) {
        return toProxy;
    }

    return new Proxy(toProxy, {
        get(target, property) {
            if (property === '__rbjs__') {
                return true;
            } else if (handlers.hasOwnProperty(property)) {
                const handler = handlers[property];
                return (...args) => rbjs(handler(target, ...args));
            } else if (typeof target[property] === 'function') {
                return (...args) => rbjs(target[property](...args));
            }
            return rbjs(target[property]);
        },

        has(target, property) {
            return (property in handlers)
                || (property in target);
        }
    });
}
