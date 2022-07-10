const http = require('http')
var fs = require('fs');
var url = require('url');

const port = process.env.PORT || 3000

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    
    var route = filename === "./" ? './index.html' : filename;

    fs.readFile(route, (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(port);


