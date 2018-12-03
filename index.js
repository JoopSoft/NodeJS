const storage = require('./storage');


storage.put("name", 111);
// storage.put({test: "test"}, 10);

// console.log(storage.get("test"));
// console.log(storage.get({test: "test"}));

storage.saveSync();

storage.load()
    .then(() => {
        storage.get("name");
    })
    .catch(err => {
        console.log('En error was catched');
    });