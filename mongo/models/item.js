var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var item = new Schema({
    name: String,
    purchased: Boolean
});

// the schema is useless so far
// we need to create a model using it
var Item = mongoose.model('Item', item);

// make this available to our users in our Node applications
module.exports = Item;