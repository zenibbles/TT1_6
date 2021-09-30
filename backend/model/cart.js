var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const product_id = new mongoose.Schema({
    type: Schema.Types.ObjectId,
    ref: 'Category'
})
const product_name = new mongoose.Schema({
    type: String,
})
const qty_ordered = new mongoose.Schema({
    type: Number,
})
const product_price = new mongoose.Schema({
    type: Number,
})
const total_price = new mongoose.Schema({
    type: Number,
})

const ProductListSchema = new mongoose.Schema({
    product_id: product_id,
    product_name = product_name,
    qty_ordered: qty_ordered,
    product_price:product_price,
    total_price:total_price
})

var OrderItem = new Schema({
	customer_id: {
		type: String,
		required: 'Customer id required',
		unique: true
	},
	product_list: ProductListSchema,
	total_price: {
		type: String,
		required: 'Description is required'
	},
	
});

module.exports = mongoose.model('Category', CategorySchema);