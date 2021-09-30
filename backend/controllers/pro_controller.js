var user = require('../model/products');

exports.listAll = (req, res) => {
    user.find()
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(500).send({message:err.message || "Error occured while retrieving information."})
        })
    
}

exports.update = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update cannot be empty!"})
    }
    const id = req.param.category_id;
    const title = req.param.title;

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
