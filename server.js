const http = require('http');
const html = (path) => {
   return `<html>
              <head>
                <meta charset="UTF-8">
              </head>
              <body>
                <h1>${path}</h1>
              </body>
           </html>`;
} 

const server = http.createServer(function(req, resp){
   if(req.url == '/'){
      resp.end(html('Home'));
   }

   if(req.url == '/livros'){
      resp.end(html('livros'));
   }
   
});

server.listen(3000);