const app = require('express')(),
    port = process.env.PORT || 3000;

const { Pool, Client } = require('pg');
const pool = new Pool({
    user: 'userVYO',
    host: 'postgresql',
    database: 'db1',
    password: 'boo',
    port: 5432,
});

app.get('/', async (req, res) => {
    // const client = new Client();
    // await client.connect();

    pool
        .query('SELECT * FROM foo')
        .then(rows => {
            res.send(JSON.stringify({ rows: rows.rows, fuck: 'yea' }));
        })
        .catch(e => {
            console.error(e.stack);
            res.send({ err: e.stack });
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
