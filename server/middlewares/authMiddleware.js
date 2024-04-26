const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers;
  if (!authHeader) {
    return res.status(401).send("Unauthorized");
  }
  const token = authHeader && authHeader.split(" ")[1];
  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString(
    "utf-8"
  );
  const [username, password] = decodedCredentials.split(":");
  // Validate username and password
  if (username === "testuser" && password === "testpassword") {
    res.send("Authenticated!");
  } else {
    res.status(401).send("Unauthorized");
  }
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, "process.env.TOKEN_SECRET", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function generateAccessToken(username) {
  return jwt.sign({ data: username }, "process.env.TOKEN_SECRET", {
    expiresIn: "1h",
  });
}

module.exports = {
  authenticateToken,
  generateAccessToken,
};
