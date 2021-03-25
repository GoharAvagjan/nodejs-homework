/*
    3. Server-ում ունենք users.json ֆայլ, որը զանգված է կազմված "fisrt_name", "last_name", "email", "age" դաշտեր պարունակող օբյեկտներից ։
     Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ filter դաշտը , վերադարձնել users.json-ից զանգված միայն այն օբյեկներից ,
    որոնց "fisrt_name" կամ "last_name" պարունակում է filter-ի արժեքը։
*/
const http = require('http');
const url = require('url');
const users = require('./users');

const server = http.createServer(function (req, res)  {
    const urlData = url.parse(req.url,  true);
    if( urlData.pathname === '/sunny') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users.filter(user =>{
            return !urlData.query.filter || user.firstname.includes(urlData.query.filter) || user.lastname.includes(urlData.query.filter);
        })));
    }
    else {
        res.end();
    }

});
server.listen(2021);