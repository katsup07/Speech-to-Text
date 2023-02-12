const http = require('http');
const fs = require('fs');

dataSet = {};

const files = [
	{ filePath: './index.html', name: 'html' },
	{ filePath: './index.css', name: 'css' },
	{ filePath: './magic.jpg', name: 'image' },
	{ filePath: './index.js', name: 'js1' },
	{ filePath: './handlers.js', name: 'js2' },
];

// Read in all the files
for (let file of files) {
	fs.readFile(file.filePath, (err, data) => {
		if (err) {
			throw err;
		}

		dataSet[file.name] = data;
	});
}

http
	.createServer((req, res) => {
		res.statusCode = 200;
		if (req.url.indexOf('.css') != -1) {
			res.writeHead(200, { 'Content-Type': 'text/css' });
			res.write(dataSet.css);
			res.end();
			return;
		}
		if (req.url.indexOf('magic') != -1) {
			res.writeHead(200, { 'Content-Type': 'imag/jpeg' });
			res.write(dataSet.image);
			res.end();
			return;
		}
		if (req.url.indexOf('index.js') != -1) {
			res.writeHead(200, { 'Content-Type': 'text/javascript' });
			res.write(dataSet.js1);
			res.end();
			return;
		}
		if (req.url.indexOf('handlers.js') != -1) {
			res.writeHead(200, { 'Content-Type': 'text/javascript' });
			res.write(dataSet.js2);
			res.end();
			return;
		}

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(dataSet.html);
		res.end();
	})
	.listen(8080);


  // let html;
  // let css;
  // let js1;
  // let js2;

// fs.readFile('./index.html', 'utf8', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   html = data;
// });
// fs.readFile('./index.css', 'utf8', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   css = data;
// });
// fs.readFile('./magic.jpg', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   image = data;
// });
// fs.readFile('./index.js', 'utf8', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   js1 = data;
// });
// fs.readFile('./handlers.js','utf8', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   js2 = data;
// });