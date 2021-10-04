const http = require('http');
const html = `
   <html>
      <head>
         <meta charset="UTF-8">
      </head>
      <body>
         <h1>Casa do Código</h1>
      </body>
   </html>
`;

const server = http.createServer(function(req, resp){
   resp.end(html);
});

server.listen(3000);