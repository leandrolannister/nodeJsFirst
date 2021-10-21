const http = require('http');
const html = (text) => {
    return `
       <html>
          <body>
             <h1>${text}
          </body>
       </html>
    `;
 }

const server = http.createServer((req, resp) => {
   if(req.url == '/livros'){
       resp.end(html('Livros'));
   }else{
       resp.end(html('Home'));
   }
}); 

server.listen(3000);

