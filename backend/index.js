const http = require("http");
const app = require("./app");
const cors = require("cors")
const bodyParser = require("body-parser");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json())

/** Routes */
require('./routes/auth.routes')(app)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});


server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
