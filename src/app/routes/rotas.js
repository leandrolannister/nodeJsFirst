require('../../config/html');

module.exports = (app) => {
   app.get('/', (req, resp) => {
      resp.send(html('Home'));
   });

   app.get('/livros', (req, resp) => {
      resp.send(html('livros'));
   });
}