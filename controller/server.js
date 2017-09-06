
var {User} = require('../models/user');
var {Group} = require('../models/group');
var {mongoose} = require('../models/mongoose');

/*
	firstname: {
		required: true,
		type: String
		trim: true
		minlength: 2
	}
	lastname: {
		required: true,
		type: String,
		trim: true,
		minlength: 1

	}
	username: {
		required: true,
		type: String,
		unique: true,
		trim: true,
		minlength: 4
	}

	password: {
		required: true,
		type: String,
		unique: true
		minlength: 8
	}

	email: {
		required: true,
		type: String,
		unique: true
	}

	phonenumber: {
		required: true,
		type: String,
		unique: true
	}
*/
var newUser = new User({
	firstname: "tony",
	lastname: "vo",
	username: "ttvo1022",
	password: "abcd123343",
	email: "ttvo1022@gmail.com",
	phonenumber: "2065793508"
});

var newGroup = new Group({
	groupName: "AwesomePeople",
	groupLeader: newUser
});

newGroup.save().then((user) => {
	console.log("Success \n" + user);
}).catch((err) => {
	console.log("received err " + err);
})
// newUser.save().then(function(user) {
// 	console.log("ok + " +user);
// }).catch(function(err) {
// 	console.log("received err " + err);
// });
