const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PollSchema = new mongoose.Schema({
    question: String,
    options: Array,
    _users: [{type:Schema.Types.ObjectId, ref:'User'}],
})

mongoose.model('Poll', PollSchema)
