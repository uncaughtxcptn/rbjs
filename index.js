import any from './any';

const handlers = {
    any
};

export default function citrine(target) {
    if (!(target instanceof Array)) {
        return target;
    }

    return new Proxy(array, {
        get(target, property, receiver) {
            if (property in handlers) {
                const handler = handlers[property];
                return (...args) => citrine(handler(target, ...args));
            }
        }
    });
}
