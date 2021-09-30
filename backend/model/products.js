var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	category_id: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	title: {
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
	price: {
		type: Number,
		required: 'Price is required'
	},
	qty: {
		type: Number,
		required: 'Stock is required'
	},
	/*
	rating: { 
			type: Number, 
			required: 'Rating is required'
	}, 
	numReviews: { 
			type: Number, 
			required: 'Number of Review is required'
	}, 
	*/
});

module.exports = mongoose.model('Products', ProductSchema);