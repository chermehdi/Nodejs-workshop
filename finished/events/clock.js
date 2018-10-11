const { EventEmitter } = require("events");

class Clock extends EventEmitter {
  /**
   * initialize the clock object
   */
  constructor() {
    super();
    this.running = false;
  }
  /**
   * start running the clock object
   */
  start() {
    this.running = true;
    this.intervalIdentifier = setInterval(() => {
      if (this.running) {
        this.emit("tick");
      } else {
        this.clear();
      }
    }, 1000);
  }

  /**
   * stop the clock object
   */
  stop() {
    this.running = false;
  }
  /**
   * execute the given function when every tick
   * @param {Function} callback
   */
  tick(callback) {
    this.on("tick", callback);
  }

  /**
   * perform clean up operations
   */
  clear() {
    if (!this.intervalIdentifier) return;
    clearInterval(this.intervalIdentifier);
    this.intervalIdentifier = undefined;
  }
}

module.exports = Clock;
