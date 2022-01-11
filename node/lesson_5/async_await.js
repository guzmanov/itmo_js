const fs = require('fs');
const http = require('http');

let tasks = ['header.html', 'index.html',
	'index2.html', 'index3.html', 'footer.html'];
	
http.createServer((req, res)=>{
	readFiles(tasks).then((allData)=>{
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end(allData);
	}).catch(()=>{
		console.log('!!!', err);
		res.statusCode = 500;
		return res.end(err.toString());
	});
}).listen(8000);

/*let promise = tasks.reduce((prev, curr)=>{
	return prev.then((data)=>{
		if(data) allData += data;
		
		return createPromiseReadFile(curr);
	})
}, Promise.resolve());*/

async function readFiles(arrFilenames){
	let allData = '';
	
	for(let i = 0; i < arrFilenames.length; i++){
		allData += await createPromiseReadFile(arrFilenames[i]);
	}
	
	return allData;
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