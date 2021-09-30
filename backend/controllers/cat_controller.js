var cat = require('../model/categories');


exports.listAll = (req, res) => {
    cat.find()
        .then(cat => {
            res.send(cat);
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
    const name = req.param.name;

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