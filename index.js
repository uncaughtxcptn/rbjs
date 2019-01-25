import any from './methods/any';

const handlers = {
    any
};

export default function citrine(toProxy) {
    if (!(toProxy instanceof Array)) {
        return toProxy;
    }

    return new Proxy(toProxy, {
        get(target, property) {
            if (property in handlers) {
                const handler = handlers[property];
                return (...args) => citrine(handler(target, ...args));
            }
            return target[property];
        }
    });
}
