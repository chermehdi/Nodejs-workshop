const Clock = require("./clock");

let clock = new Clock();

clock.start();

clock.tick(() => {
  console.log("ticked ...");
});

setTimeout(() => {
  clock.stop();
}, 5000);
