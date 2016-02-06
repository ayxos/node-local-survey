var mongoose    = require('mongoose');
    config      = require('../config');
var Schema      = mongoose.Schema;

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, function(err) {
    if (err) throw err;
});

var clientSchema = mongoose.Schema({
    company: String,
    name: String,
    priority: String,
    company_size: String,
    status: String,
    notes: String,
    lead_owner: String,
    firstImage: String,
    secondImage: String,
});

module.exports = {
    Client: mongoose.model('client', clientSchema)
};