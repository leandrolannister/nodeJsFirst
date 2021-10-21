module.exports = (app) => {
   app.get('/', (req, resp) => {
      resp.send(html('Home'));
   });

   app.get('/livros', (req, resp) => {
      resp.send(html('livros'));
   });
}


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