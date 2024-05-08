const http = require("http");

const server = http.createServer((req, res) => {
  // Extract request details
  const { method, url, headers } = req;

  // Create response object
  const responseObject = {
    method,
    url,
    headers,
  };

  // Set response headers
  res.setHeader("Content-Type", "application/json");

  // Handle different HTTP methods
  if (req.method === "GET" || req.method === "POST") {
    // Send response with request details
    res.statusCode = 200;
    res.end(JSON.stringify(responseObject));
  } else {
    // Send 405 Method Not Allowed for unsupported methods
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

module.exports = { server };
