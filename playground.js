// run this file using node playground.js
console.log("This is a test");

const { spawn } = require("child_process");

const command = spawn("ls", ["-alh"]);

command.stdout.on("data", data => {
  console.log("command executed ", data.toString());
});
