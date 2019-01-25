import any from './any';

const handlers = {
    any
};

const treatAsProperties = [];

export default function citrine(target) {
    if (!(target instanceof Array)) {
        return target;
    }

    return new Proxy(array, {
        get(target, property, receiver) {
            if (property in handlers) {
                const handler = handlers[property];

                if (treatAsProperties(property)) {
                    return handler(target);
                } else {
                    return handler.bind(null, target);
                }
            }
        }
    });
}
