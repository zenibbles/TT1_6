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
