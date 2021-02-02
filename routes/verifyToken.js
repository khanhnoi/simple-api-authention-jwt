const jwt = require("jsonwebtoken");

function auth(request, response, next) {
  const token = requset.header("auth-token");
  if (!token) return response.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    require.user = verified;
  } catch (error) {
    response.status(400).send("Invalid Token");
  }
}
