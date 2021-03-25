const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function (req, res)  {
    console.log(req.method);
    res.end(new Date().getSeconds().toString());

    for (let key in req.headers) {
        console.log("headers key:value  is  " + key + ":" + req.headers[key]);
    }
    console.log(req.url);
      // const urlData = url.parse(req.url,{parseQueryString: true});

    //console.log(urlData.query.user);

    if(req.url === '/sunny'){
        console.log('Yes')
    }
});


server.listen(2021);