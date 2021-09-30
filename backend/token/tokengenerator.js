const jwt = require("jsonwebtoken");

function generateToken(user) {
  if (!user) return null;

  const u = {
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
  };

  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24, // expires in 24 hours
  });
}