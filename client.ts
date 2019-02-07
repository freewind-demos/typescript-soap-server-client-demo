import * as  soap from 'soap';

const url = 'http://localhost:1212/hello?wsdl';

soap.createClient(url, function (err, client: any) {
  client.hello({"arg0": 'soap'}, function (err: any, result: any) {
    console.log('result:', JSON.stringify(result));
  });
});
