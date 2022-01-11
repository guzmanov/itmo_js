const fs = require('fs');
const http = require('http');

http.createServer((req, res)=>{
	let allData = '';
	
	let promise = createPromiseReadFile('header.html');
	
	promise.then((data)=>{
		allData += data;
		return createPromiseReadFile('index.html');
	}).then((data)=>{
		allData += data;
		return createPromiseReadFile('footer.html');
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
}).listen(8002);

function createPromiseReadFile(filename){
	return new Promise((res, rej)=>{
		fs.readFile(filename, 'utf-8', (err, data)=>{
			if(err)
				rej(err);
			else
				res(data);
		});
	});
}