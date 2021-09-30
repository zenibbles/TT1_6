const db = require("../model");
const Customer = db.customer;

var bcrypt = require("bcryptjs");
const { generateToken } = require("../token/tokengenerator");

exports.register = (req, res) => {
	const customer = new Customer({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		username: req.body.username,
		postal_code: req.body.postal_code,
		password: bcrypt.hashSync(req.body.password, 8),
		created_at: new Date().toDateString()
	});

	customer.save((err, customer) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		customer.save(err => {
			if (err) {
				res.status(500).send({ message: err });
				return;
			}

			res.send({ message: "Customer was registered successfully!" });
		});
	}
	);
};

exports.login = (req, res) => {
	Customer.findOne({
		username: req.body.username,
	})
	.exec((err, customer) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		if (!customer) {
			return res.status(404).send({ message: "Customer Not found." });
		}

		var passwordIsValid = bcrypt.compareSync(
			req.body.password,
			customer.password
		);

		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: "Invalid Password!"
			});
		}

		var token = generateToken(customer);

		res.status(200).send({
			id: customer._id,
			username: customer.username,
			accessToken: token
		});
	});
};