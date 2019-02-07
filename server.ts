import * as soap from 'soap';
import * as fs from 'fs';
import * as http from 'http';

const myService = {
  HelloService: {
    HelloPort: {
      hello: function (args: { arg0: string }) {
        console.log('### args: ###', args)
        const {arg0} = args;
        return {
          'return': `Hello, ${arg0}!`
        };
      },
    }
  }
};

const wsdl = fs.readFileSync('helloService.wsdl', 'utf8');

//http server example
const server = http.createServer(function (request, response) {
  response.end('404: Not Found: ' + request.url);
});

server.listen(1212);
const soapServer = soap.listen(server, '/hello', myService, wsdl);

soapServer.log = function (type, data) {
  console.log(`${type}: ${data}`)
};

console.log('http://localhost:1212/hello');
console.log('http://localhost:1212/hello?wsdl');
