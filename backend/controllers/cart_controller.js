var cart = require('../model/cart');

/**
 * Insert products added from frontend cart into database
 * @param {*} req 
 * @param {*} res 
 */
exports.insertProducts = (res,req) => {
    const cart = new OrderItem({
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
        
    })
}


/**
 * List all products from Order Item Table
 * @param {*} req 
 * @param {*} res 
 */
exports.listAll = (req, res) => {
    cart.find()
        .then(cart => {
            res.send(cart);
        })
        .catch(err => {
            res.status(500).send({message:err.message || "Error occured while retrieving information."})
        })
    
}

