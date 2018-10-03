const Clock = require("./clock");

/**
 * create the clock object
 */
let clock = new Clock();

/**
 * start the clock object
 */
clock.start();

/**
 * this method should tell the clock object what happens every second
 */
clock.tick(() => {
  console.log("ticked ...");
});

/**
 * to test our implementation, we stop the clock after 5seconds and see if the
 * the script stops and the clock also
 */
setTimeout(() => {
  clock.stop();
}, 5000);
