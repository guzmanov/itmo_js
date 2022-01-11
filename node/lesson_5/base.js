const fs = require('fs');
const http = require('http');

http.createServer((req, res)=>{
	let allData = '';

	function iteratir(i){
		if(i == task.length) {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			res.end(allData);
		}
	}

	fs.readFile('header.html', 'utf-8', (err, data)=>{
		if(err){
			console.log(err);
			res.statusCode = 500;
			return res.end();
		}
		
		allData += data;
		
		fs.readFile('index.html', 'utf-8', (err, data)=>{
			if(err){
				console.log(err);
				res.statusCode = 500;
				return res.end();
			}
			
			allData += data;
			
			fs.readFile('footer.html', 'utf-8', (err, data)=>{
				if(err){
					console.log(err);
					res.statusCode = 500;
					return res.end();
				}
				
				allData += data;
				
				res.writeHead(200, {
					'Content-Type': 'text/html'
				});
				res.end(allData);
			});
		});
	});
}).listen(8000);