
const http = require('http');
const fs = require('fs');

let html;
let css;
let js;

fs.readFile('./index.html', function (err, data) {
  if (err) {
    throw err;
  }
  html = data;
});
fs.readFile('./index.css', function (err, data) {
  if (err) {
    throw err;
  }
  css = data;
});
fs.readFile('./magic.jpg', function (err, data) {
  if (err) {
    throw err;
  }
  image = data;
});
fs.readFile('./index.js', function (err, data) {
  if (err) {
    throw err;
  }
  js1 = data;
});
fs.readFile('./handlers.js', function (err, data) {
  if (err) {
    throw err;
  }
  js2 = data;
});
 
http.createServer((req, res) => {
  res.statusCode = 200;
if(req.url.indexOf('.css') != -1){
   res.writeHead(200, {'Content-Type': 'text/css'});
   res.write(css);
   res.end();
   return;
  }
if(req.url.indexOf('magic') != -1){
   res.writeHead(200, {'Content-Type': 'text/css'});
   res.write(image);
   res.end();
   return;
  }
  if(req.url.indexOf('index.js') != -1){
   res.writeHead(200, {'Content-Type': 'text/javascript'});
   res.write(js1);
   res.end();
   return;
  }
  if(req.url.indexOf('handlers.js') != -1){
   res.writeHead(200, {'Content-Type': 'text/javascript'});
   res.write(js2);
   res.end();
   return;
  }
res.writeHeader(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end();
}).listen(8080);