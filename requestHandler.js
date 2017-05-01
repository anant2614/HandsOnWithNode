var exec = require('child_process').exec;
module.exports = {
  start: function(res) {
    exec('ls -l', function(err, stdout, stderr) {
      console.log(stdout);
      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.write("Started...");
      res.end();
    });
  },
  upload: function(res) {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.write("Uploaded !!");
    res.end();
  }
};
