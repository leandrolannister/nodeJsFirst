class LivroDAO {

    constructor(db) {
        this._db = db;
    }

    all(callback) {
        this._db.all(
            'SELECT * FROM livros', (error, books) => {
                callback(error, books)
            }
        )
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all('select * from livros', (error, books) => {
                if (error) return reject('Erro na lista de livros');

                return resolve(books);
            });
        });
    }
}

module.exports = LivroDAO;