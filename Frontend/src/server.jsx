const express = require('express');
const pg = require('pg');

const app = express();
const port = 5000;

const pool = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
  password: '1505',
  database: 'mydb',
});

app.get('/users', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    const data = result.rows;
    res.json(data);
    client.release();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
