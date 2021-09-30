var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	username: {
		type: String,
		required: 'Username is required',
		unique: true
	},
	password: {
		type: String,
		require: 'Password is required',
	},
	first_name: {
		type: String,
		required: 'First Name is required'
	},
	last_name: {
		type: String,
		required: 'Last Name is required'
	},
	postal_code: {
		type: String,
		required: 'Stock is required',
		minlength: 6,
		maxlength: 6
	},
	gender: {
		type: String,
		required: 'Gender is required',
		enum: {
			values: ['Male', 'Female'],
			message: '${VALUE} not supported'
		}
	},
	created_at: {
		type: String,
		required: 'created_at is required'
	},
});

module.exports = mongoose.model('Customer', CustomerSchema);