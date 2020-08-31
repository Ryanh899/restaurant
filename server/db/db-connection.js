// mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb/test', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', err => {
    console.log('Mongoose default connection error:', err);
    db.close();
});

db.once('open', () => {
    console.log(`Mongoose default connection open`);
});

module.exports = db; 