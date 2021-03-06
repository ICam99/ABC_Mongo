var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true}
});


module.exports = mongoose.model('Product', ProductSchema);