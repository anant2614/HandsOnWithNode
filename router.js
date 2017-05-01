var handler = require('./requestHandler');
var router = {
  route: function(handle, url, res) {
    if (typeof(handle[url]) === 'function')
      handle[url](res);
    else {
      res.writeHead(404, {
        "Content-Type": "text/plain"
      });
      res.write("Not found !!");
      res.end();
    }
  },
  print: function() {
    console.log("hello here !!");
  }
};
module.exports = router;
