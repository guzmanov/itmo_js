const fsp = require('fs/promises');
const http = require('http');

http.createServer((req, res)=>{
	let allData = '';
	
	let promise = fsp.readFile('header.html', 'utf-8');
	
	promise.then((data)=>{
		allData += data;
		return fsp.readFile('index.html', 'utf-8');
	}).then((data)=>{
		allData += data;
		return fsp.readFile('footer.html', 'utf-8');
	}).then((data)=>{
		allData += data;
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end(allData);
	}).catch((err)=>{
		console.log('!!!', err);
		res.statusCode = 500;
		return res.end(err.toString());
	});
}).listen(8000);