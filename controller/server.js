
const {User} = require('../models/user');
const {Group} = require('../models/group');
const {mongoose} = require('../models/mongoose');
const express = require('express');
const path = require('path');

const app = express();
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'../views/index.html'));
});

app.listen(3000, () => {
	console.log('App is listening on port 3000');
}); 

/*
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
newUser.save().then(function(user) {
	console.log("ok + " +user);
}).catch(function(err) {
	console.log("received err " + err);
});
*/



