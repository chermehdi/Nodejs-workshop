let Server = require("./server");

const server = new Server(3001);

/**
 * whenever a user types http://localhost:3001/route this method should be executed
 */
server.get("/route", (req, res) => {});

/**
 * whenever a user posts to http://localhost:3001/route (either by submitting a from or just sending a post) this method should be executed
 */
server.post("/route", (req, res) => {});

/**
 * this method indicates what to do when the server start's accepting requests
 */
server.listen(() => console.log("started listening"));
