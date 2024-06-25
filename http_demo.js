const http = require('http');

//create server object
http.createServer((req, res) => {
    //write response
    res.write('Hellow World');
    res.end()
    }).listen(5000, () => console.group('Server running...'));
