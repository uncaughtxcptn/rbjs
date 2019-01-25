import all from './methods/all';
import any from './methods/any';
import assoc from './methods/assoc';

const handlers = {
    all,
    any,
    assoc
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
            }
            return target[property];
        },

        has(target, property) {
            return (property in handlers)
                || (property in target);
        }
    });
}
