var http = require('http');
var server = {
  start: function(handle, route) {
    http.createServer(function(req, res) {
      console.log("Request received");
      console.log("Request url", req.url);
      console.log("Request method", req.method);
      route(handle, req.url, res);
    }).listen(8080);
  }
};

module.exports = server;
