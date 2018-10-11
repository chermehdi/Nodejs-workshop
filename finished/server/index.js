let Server = require("./server");

const server = new Server(3001);

server.get("/hello/by", (req, res) => {
  console.log("the request parameters ", req.params);
  res.end("bonjour");
});

server.post("/url", (req, res) => {
  res.end("salut les gens");
});

server.listen(() => console.log("started listening"));
