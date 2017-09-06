var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Voma_Notifications', {useMongoClient: true});

module.exports = {mongoose};