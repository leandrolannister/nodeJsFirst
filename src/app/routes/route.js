require('../../config/html.js');
const { response } = require('express');
let bd = require('../../config/database.js');
const LivroDAO = require('../ifra/LivroDAO.js');


module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.send(html('Home'))
    });

    app.get('/magazine', (req, resp) => {
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

    app.get('/magazines', (req, resp) => {
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

    app.get('/livros', (req, resp) => {
        let livroDao = new LivroDAO(bd);

        livroDao.lista()
            .then((books) => {
                resp.marko(
                    require('../view/livros/lista/lista.marko'),
                    { livros: books }
                );
            })
            .catch((err) => {
                throw new Error('Error', err)
            });
    });

    app.get('/livros/form', (req, resp) => {
        resp.marko(
            require('../view/form/form.marko')
        );
    });

    app.post('/livros', (req, resp) => {
       let livroDao = new LivroDAO(bd);

       console.log(req.body);
    });
}