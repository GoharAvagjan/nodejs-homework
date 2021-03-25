/*
1.Գրել ծրագիր, որը կստուգի , եթե req.url /sunny է, ապա console-ում տպի Yes.
 */
const http = require('http');
const url = require('url');
//const fs = require('fs');

const server = http.createServer(function (req, res)  {
    //const urlData = url.parse(req.url, {parseQueryString: true});
    //console.log(req.url);
    if(req.url === '/sunny'){
       console.log('Yes')
   }
});
server.listen(2021);