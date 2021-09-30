var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
	name: {
		type: String,
		required: 'Title is required',
		unique: true
	},
	image: {
		type: String,
		require: 'Image is required'
	},
	description: {
		type: String,
		required: 'Description is required'
	},
});

module.exports = mongoose.model('Category', CategorySchema);