const { hostname } = require("os");
const http = require("http");

const message = "Hello world";
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/plain");
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log("server running at http://" + hostname() + ":" + port);
});
