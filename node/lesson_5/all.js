const fs = require('fs');
const http = require('http');

let tasks = ['header.html', 'index.html',
	'index2.html', 'index3.html', 'footer.html'];
	
http.createServer((req, res)=>{
	readFiles(tasks).then((allData)=>{
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end(allData.join(''));
	}).catch(()=>{
		console.log('!!!', err);
		res.statusCode = 500;
		return res.end(err.toString());
	});
}).listen(8000);	
	
function readFiles(arrFilenames){
	let arr_promises = arrFilenames.map((el)=>{
		return createPromiseReadFile(el);
	});
	
	return Promise.all(arr_promises);
}
	
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