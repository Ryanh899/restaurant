// mongoose connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true},  { useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', err => {
    console.log('Mongoose default connection error:', err);
    db.close();
});

db.once('open', () => {
    console.log(`Mongoose default connection open`);
});

module.exports = db; 