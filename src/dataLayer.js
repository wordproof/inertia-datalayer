function storageData(modelObject) {

    let storageData = [];

    return {

        find: function (value) {
            return value ? storageData.find(value) : storageData;
        },

        push: function (element) {
            storageData.push(element);
        },

        del: function (key) {
            if (typeof storageData[key] !== 'undefined')
                storageData[key].delete();
        },

        set: function (key, value) {
            if (typeof storageData[key] !== 'undefined')
                storageData[key] = value;
        }

    }
}

module.exports = storageData