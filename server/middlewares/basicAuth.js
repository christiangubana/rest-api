// basicAuth.js
const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header is required" });
  }

  const encodedCredentials = authHeader.split(" ")[1];
  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString("utf-8");
  const [username, password] = decodedCredentials.split(":");

  // Check if username and password match
  if (username === "testuser" && password === "testpassword") {
    next();
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = basicAuth;
