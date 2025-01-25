
var http = require ('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.end('("id": 1, "price": "200", "title": "school bag")');
//if (req.url ==="/") {
    //res.write("this is default page");
    //res.end();
  //}
  if (req.url ==="/products") {
    res.write("THIS IS PRODUCT PAGE");
    res.end();
  }
  if (req.url ==="/users") {
    res.write("THIS IS USERS PAGE");
    res.end();
  }
  if (req.url ==="/orders") {
    res.write("THIS IS ORDERS PAGE");
    res.end();
  } 
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
