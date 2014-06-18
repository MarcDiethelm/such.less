var http = require('http')
   ,fs = require('fs')
   ,path = require('path')

   ,pkg = require('./package.json')
   ,port = pkg.port
   ,mime = {
		html:   'text/html'
		,css:   'text/css'
	}
;

/* le handmade static file server. nice. */

http.createServer(function(req, res) {
	var aUrl = req.url.split('?')
	   ,url = aUrl[0]
	   //,query = aUrl[1]
	   ,htmlPath = './pages/'
	   ,staticPath = '/static'
	   ,isStaticRequest = (url.indexOf(staticPath) === 0)
	   ,isFaviconRequest = (url === '/favicon.ico')
	   ,file
	;
	
	if (isFaviconRequest) { // we don't serve no stinking ICO
		res.statusCode = 404;
		res.end();
		return;
	}
	else if (isStaticRequest) {
		file = url.replace(/^\//, '');
	}
	else { // html page
		file = path.join(htmlPath, ( url == '/' ? 'index.html' : './'+ url + '.html' ));
	}

	fs.exists(file, function (exists) {
		var extension;
		if (exists) {
			extension = file.split('.').pop();
			res.statusCode = 200;
			res.setHeader("content-type", mime[extension]);
			fs.createReadStream(file).pipe(res); // This is what Node is about.
			console.log('200', url);
		}
		else {
			console.error('404', url);
			res.statusCode = 404;
			res.write('such 404. wow.\n\n'+ url);
			res.end();
		}
	});
}).listen(port);

console.log('such http server. much listening. port %d. wow.\n', port);
