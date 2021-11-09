require('../../config/html.js');
const LivroDAO = require('../ifra/LivroDAO.js');
let bd = require('../../config/database.js');

module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.send(html('Home'))
    });

    app.get('/book', (req, resp) => {
        resp.marko(
            require('../view/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: '1',
                        titulo: 'PHP'
                    }
                ]
            }
        );
    });

    app.get('/livros', (req, resp) => {
        let livroDao = new LivroDAO(bd);

        livroDao.all((error, books) => {
            resp.marko(
                require('../view/livros/lista/lista.marko'),
                {
                    livros: books
                }
            );
        });
    });

    app.get('/livrosp', (req, resp) => {
        let livroDao = new LivroDAO(bd);

        livroDao.lista()
            .then((books) => {
                resp.marko(
                    require('../view/livros/lista/lista.marko'),
                    { livros: books }
                );
            })
            .catch((error) => {
                console.log('Error', error);
            });
    });
}