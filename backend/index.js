const http = require("http");
const app = require("./app");
const cors = require("cors")
const bodyParser = require("body-parser");
const server = http.createServer(app);
const controller = require('./controllers/auth.controller')

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

<<<<<<< Updated upstream
app.get("/api/auth/x", (req,res) => {
  controller.login
})
=======
app.get("/api/auth/x", (req, res) => {
  
});

>>>>>>> Stashed changes

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
