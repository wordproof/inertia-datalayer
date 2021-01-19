function storageData() {

    let $this = this;

    $this.storageData = [];
    $this.allowedKeys = [];

    return {

        init: function (allowedKeys) {
            $this.allowedKeys = allowedKeys;
        },

        find: function (value) {
            return value ? $this.storageData.find(value) : $this.storageData;
        },

        set: function (value, key) {

            if (typeof key !== 'undefined') {
                if (typeof $this.allowedKeys.find(el => el === key) === 'undefined')
                    return false;
                else
                    $this.storageData[key] = value;
            }

            if (typeof value === 'object') {
                for (const [key, val] of Object.entries(value)) {
                    if (typeof $this.allowedKeys.find(el => el === key) !== 'undefined')
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

module.exports = storageData