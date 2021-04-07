//ToDo: establish a connection to mongoDB
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URI,


    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

// listener
db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});