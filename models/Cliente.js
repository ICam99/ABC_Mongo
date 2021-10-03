var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true, max: 100}
});


module.exports = mongoose.model('Cliente', ClienteSchema);