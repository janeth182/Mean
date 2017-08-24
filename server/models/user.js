var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var userSchema = new Schema({
	_id: {type : objectId, auto : true},
	name:{type:String,require:true},
	contactNo:{type:String,require:true},
	address:{type:String,require:true}
},{
	versionKey: false
});

var user = mongoose.model('users',userSchema);

module.exports = user;