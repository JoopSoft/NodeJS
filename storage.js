const fs = require('fs');
const path = './database/storage.json';

let storage = {};

module.exports = {
    put: (key, value) => {
        if (typeof(key) !== "string") {
            throw new Error('Key is not a string!!!');
        }
        if (storage[key]) {
            throw new Error('Key already exists!!!');
        }
        storage[key] = value;
    },
    get: (key) => {
        if (typeof(key) !== "string") {
            throw new Error('Key is not a string!!!');
        }
        if (!storage[key]) {
            throw new Error('Key does not exist!!!');
        }
        return storage[key];
    },
    saveSync: () => {
        fs.writeFileSync(path, JSON.stringify(storage));
        console.log('Saved successfully');
    },
    loadSync: () => {
        storage = JSON.parse(fs.readFileSync(path));
        console.log('Read successfully');
    },
    load: () => {
        return new Promise((req, res) => {
            let data = fs.readFile(path, (err, data) => {
                if(err) {
                    res(err);
                    return;
                }
                storage = JSON.parse(data);
                req();
            });
        });
    }
};