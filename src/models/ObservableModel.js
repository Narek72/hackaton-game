import { lego } from "@armathai/lego";

const getUUID = (() => {
    let i = 0;
    return (name) => `${name}${++i}`;
})();

export class ObservableModel {
    constructor(name) {
        this.__name__ = name;
        this._uuid = getUUID(name);
    }

    get uuid() {
        return this._uuid;
    }

    makeObservable(...props) {
        lego.observe.makeObservable(this, ...props);
    }

    createObservable(property, value) {
        lego.observe.createObservable(this, property, value);
    }

    removeObservable(...properties) {
        lego.observe.removeObservable(this, ...properties);
    }

    initialize(...args) {
        // void args;
    }

    destroy() {
        //
    }
}
