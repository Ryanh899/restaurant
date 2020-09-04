// mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://ryan:root@ec2-3-86-7-121.compute-1.amazonaws.com:27017/test', {useNewUrlParser: true},  { useUnifiedTopology: true });

// mongodb://ryan:root@ec2-3-86-7-121.compute-1.amazonaws.com:27017/test

const db = mongoose.connection;

db.on('error', err => {
    console.log('Mongoose default connection error:', err);
    db.close();
});

db.once('open', () => {
    console.log(`Mongoose default connection open`);
});

module.exports = db; 