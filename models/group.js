var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = new Schema({
	groupName: {
		type: String,
		required: true,
		unique: true
	},

	groupLeader: {
		type: {},
		required: true
	},

	groupMembers: [{}]
});

var Group = mongoose.model('Group', groupSchema);
module.exports = {Group};