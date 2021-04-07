const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    plant: String,
    cycle: String,
},
 { timestamps: true });


module.exports = mongoose.model('Plant', plantSchema);