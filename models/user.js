var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstname: {
		required: true,
		type: String
	},
	lastname: {
		required: true,
		type: String,
		trim: true,
		minlength: 1

	},
	username: {
		required: true,
		type: String,
		unique: true,
		trim: true,
		minlength: 4
	},

	password: {
		required: true,
		type: String,
		unique: true,
		minlength: 8
	},

	email: {
		required: true,
		type: String,
		unique: true
	},

	phonenumber: {
		required: true,
		type: String,
		unique: true
	}

});

var User = mongoose.model('User', userSchema);

module.exports = {User};