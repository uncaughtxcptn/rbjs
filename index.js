import any from './methods/any';
import assoc from './methods/assoc';

const handlers = {
    any,
    assoc
};

export default function citrine(toProxy) {
    if (!(toProxy instanceof Array)) {
        return toProxy;
    }

    return new Proxy(toProxy, {
        get(target, property) {
            if (property === '__citrine__') {
                return true;
            } else if (handlers.hasOwnProperty(property)) {
                const handler = handlers[property];
                return (...args) => citrine(handler(target, ...args));
            }
            return target[property];
        },

        has(target, property) {
            return (property in handlers)
                || (property in target);
        }
    });
}
