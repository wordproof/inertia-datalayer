import { Inertia } from "@inertiajs/inertia";

function storageData() {

    let $this = this;

    $this.storageData = {};
    $this.allowedKeys = [];

    Inertia.on('success', (event) => {
        console.log(event);
    });

    return {

        init: function (allowedKeys) {
            $this.allowedKeys = allowedKeys;
        },

        find: function (value) {
            if (typeof value === 'undefined')
                return $this.storageData;

            let result;

            for (const [key, val] of Object.entries($this.storageData)) {
                if (typeof val !== 'object' && typeof val !== 'function') {
                    if (val.indexOf(value) !== -1)
                        result = val;
                } else {
                    if (val.toString().indexOf(value) !== -1)
                        result = val;
                }
            }

            return result;
        },

        get: function (key) {
            return $this.storageData[key];
        },

        set: function (value, key) {

            if (typeof key !== 'undefined') {
                if
                (
                    $this.storageData.length === 0
                    || typeof $this.allowedKeys.find(el => el === key) === 'undefined'
                )
                    return false;
                else {
                    $this.storageData[key] = value;
                    return true;
                }
            }

            if (typeof value === 'object') {
                for (const [key, val] of Object.entries(value)) {
                    if
                    (
                        $this.allowedKeys.length === 0
                        || typeof $this.allowedKeys.find(el => el === key) !== 'undefined'
                    )
                        $this.storageData[key] = val;
                }
            }

            return true;
        },

        del: function (key) {
            if (typeof $this.storageData[key] !== 'undefined')
                $this.storageData[key].delete();
        }

    }
}

export let dataLayer = storageData()