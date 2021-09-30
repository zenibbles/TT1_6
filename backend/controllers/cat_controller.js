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