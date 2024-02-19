const mongoose = require('mongoose');

const uri = 'mongodb+srv://Blobman:Blobman@myatlasclusteredu.hrwoqma.mongodb.net/project1?retryWrites=true&w=majority';

const dbName = 'project1';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

module.exports = mongoose;