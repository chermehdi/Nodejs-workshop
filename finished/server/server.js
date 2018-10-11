const http = require("http");
const url = require("url");

class Server {
  constructor(port) {
    this.http = http.createServer();
    this.port = port || 3001;
    // handlers for every http verb
    this.handlers = {
      GET: {},
      POST: {}
    };
    this.middlewares = [];
    this.http.on("request", (request, response) =>
      this.register(request, response)
    );
  }
  /**
   * bootstraps the http server
   *
   * @param {object} request
   * @param {object} response
   */
  register(request, response) {
    try {
      // the second parameter indicates to the `parse` method to parse even the query string params
      // so we cann pass them along the request object
      let parsedUrl = url.parse(request.url, true);
      let method = request.method;

      /**
       * you could've just did a proxy of the request and response stuff, and wrote some handfull methods,
       * just like express does, we will see that in future workshop
       * just keep it in mind and try and implement it yourself.
       */
      this.callInternal(request, response, method, parsedUrl);
    } catch (e) {
      response.writeHead(500);
      response.end(e.message);
    }
  }
  /**
   * register a handler for get requests
   *
   * @param {string} uri
   * @param {function} handler
   */
  get(uri, handler) {
    this.handlers["GET"][uri] = handler;
  }

  /**
   * register a handler for post requests
   *
   * @param {string} uri
   * @param {function} handler
   */
  post(uri, handler) {
    this.handlers["POST"][uri] = handler;
  }
  /**
   * register the a middleware
   *
   * @param {function} middleware
   */
  use(middleware) {
    this.middlewares.push(middleware);
  }

  /**
   * executes the handler corresponding the given path and url
   *
   * @param {object} request
   * @param {object} response
   * @param {string} method
   * @param {string} pathname
   */
  callInternal(request, response, method, pathname) {
    if (this.handlers[method][pathname]) {
      this.handlers[method][pathname](request, response);
    } else {
      this.notFound(request, response, pathname);
    }
  }

  notFound(request, response, pathname) {
    response.writeHead(404);
    response.end(`the given url not found ${pathname}`);
  }
  /**
   * start listening for incomming requests and execute the given callback
   *
   * @param {function} cb
   */
  listen(cb) {
    this.http.listen(this.port, cb);
  }
}

module.exports = Server;
