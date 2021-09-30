var cart = require('../model/cart');

/**
 * Insert products added from frontend cart into database
 * @param {*} req 
 * @param {*} res 
 */
exports.insertProducts = (res,req) => {

    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"})
        return;
    }

    const cart = new OrderItem({
        customer_id: req.body.customer_id,
        product_list: req.body.product_list,
        total_price: req.body.total_price
    })

    cart.save(cart);
        

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

/**
 * Delete from the OrderItem Table
 */

exports.delete = (req,res) => {
    const id = req.params.customer_id;
    const order = req.params.product_list;

    cart.findById(id).then(
        cart.findByIdAndDelete(order)
            .then(data => {
                if(!data){
                    res.status(404).send({ message : `Cannot delete id: ${id}!`})
                }else{
                    res.send({message: "Delete is successful!"})

                }
            })
            .catch(err =>{
                res.status(500).send({message: "Error deleting id:"+ err})
            })
    )
}

/**
 * update orders, products and orderitem table
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

exports.update = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update cannot be empty!"})
    }
    const id = req.param.customer_id;
    const order = req.param.product_list;

    cart.findById(id).then(

        cart.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
            .then(data=>{
                if(!data){
                    res.status(404).send({message: `Cannot update user with ${id}'s cart information'.`})
                }else{
                    res.redirect('/');
                }
            })
            .catch(err =>{
                res.status(500).send({message: "Error in updating cart information."})
            })
    )
        
}