/*
2.Server-ում ունենք sunny.txt ֆայլ: Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ
 file դաշտը և այն հավասար է "sunny", որպես response ստանա sunny.txt
 պարունակությունը այլապես 404 status-ով ստանա "File Not Found". (Օգտագործել Get մեթոդը):
 */
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function (req, res)  {

    const urlData = url.parse(req.url,  true);
    if( urlData.query.file === 'sunny'){
        fs.createReadStream('./sunny.txt').pipe(res);
    } else {
        res.end();
    }

});
server.listen(2021);
