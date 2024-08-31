// const http = require('http');
// const requestHandler = require('./routes');

// const server = http.createServer(requestHandler);

// server.listen(3000);



const http = require('http');
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>')
    res.write('</html>');
    return res.end('Welcome to the first assignment');
  }

  if(url === '/create-user' && method === 'POST') {
    console.log('here');
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
    })
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
  if(url === "/users") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<ul>');
    res.write('<li>');
    res.write('User1');
    res.write('</li>');
    res.write('<li>');
    res.write('User2');
    res.write('</li>');
    res.write('</ul>');
    return res.end();
  }

})


server.listen(3000);
