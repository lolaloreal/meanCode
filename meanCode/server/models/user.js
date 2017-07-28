//name is always _id
const mongoose = require("mongoose")
var Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
	name: String,
	polls: [{type:Schema.Types.ObjectId, ref:'Poll'}],
}, { timestamps: true})

mongoose.model("User", UserSchema)
