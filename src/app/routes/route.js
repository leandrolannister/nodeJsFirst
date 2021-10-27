require('../../config/html');

module.exports = (app) => {
   app.get('/', (req, resp) => {
      resp.send(html('Home'));
   });

   app.get('/livro', (req, resp) => {
      resp.marko(
         require('../view/livros/lista/lista.marko'),
         {
            livros: [
               {
                  id:1,
                  titulo: 'NodeJs'
               },
               {
                  id:2,
                  titulo: 'PHP'
               },
               {
                  id:3,
                  titulo: 'Java'
               }
            ]
         }
      );
   });
}