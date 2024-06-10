const http = require("http");
const sqlite3 = require("sqlite3").verbose();

// Cria uma conexão com o banco de dados empresa.db
const db = new sqlite3.Database("empresa.db", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Conexão estabelecida com sucesso.");
    }
});

// Cria uma tabela se ela não existir no banco de dados empresa.db.
db.run(
    `CREATE TABLE IF NOT EXISTS Images_jest (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        img_name TEXT,
        img BLOB
    )`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Tabela criada com sucesso.");
        }
    }
);

// Realiza uma consulta de todas as informações da tabela Images_jest.
const searchAll = (callback) => {
    db.all("SELECT * FROM Images_jest", (err, rows) => {
        if (err) {
            console.error(err);
        } else {
            callback(rows);
        }
    });
};

// Realiza uma consulta de informações da tabela Images_jest por ID.
const searchById = (id, callback) => {
    db.get("SELECT * FROM Images_jest WHERE id = ?", [id], (err, row) => {
        if (err) {
            console.error(err);
        } else {
            callback(row);
        }
    });
};

// Prepara uma consulta para adicionar dados ao nosso bd.
const insertData = db.prepare(
    `INSERT INTO Images_jest (img_name, img)
    VALUES (?, ?)`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados inseridos com sucesso.");
        }
    }
);

// Prepara uma consulta para excluir dados do bd.
const deleteData = db.prepare(
    `DELETE FROM Images_jest WHERE id = ?`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados excluídos com sucesso.");
        }
    }
);

// Prepara uma consulta para modificar os dados do bd.
const modifyData = db.prepare(
    `UPDATE Images_jest
      SET img_name = ?,
          img = ?
      WHERE id = ?`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados modificados com sucesso.");
        }
    }
);

// Agora vamos criar o servidor e trazer as informações do bd para o servidor.
const server = http.createServer((req, res) => {
    // Para permitir os CORS e que não tenha problema neste exemplo.
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.searchParams.get("id");

    if (req.method === "GET") {
        if (id) {
            // Retorna a informação específica para o servidor.
            searchById(id, (result) => {
                if (result) {
                    result.img = result.img ? `data:image/jpeg;base64,${result.img.toString('base64')}` : null;
                    res.write(JSON.stringify(result));
                } else {
                    res.write(JSON.stringify({ error: "No data found" }));
                }
                res.end();
            });
        } else {
            // Retorna todas as informações para o servidor.
            searchAll((results) => {
                const modifiedResults = results.map(row => ({
                    ...row,
                    img: row.img ? `data:image/jpeg;base64,${row.img.toString('base64')}` : null
                }));
                res.write(JSON.stringify(modifiedResults));
                res.end();
            });
        }
    } else if (req.method === "POST") {
        let body = "";
        // Recebe as informações enviadas para o servidor.
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            // Deserializa as informações.
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usa a consulta preparada para inserir os dados recebidos do Frontend.
            insertData.run(
                parsedBody.img_name,
                Buffer.from(parsedBody.img, 'base64'),
                (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Dados criados com sucesso.");
                        res.end("Dados criados com sucesso.");
                    }
                }
            );
        });
    } else if (req.method === "DELETE") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usamos a consulta preparada para excluir os dados que o Frontend indicar.
            deleteData.run(parsedBody.id, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Dados excluídos com sucesso.");
                    res.end("Dados excluídos com sucesso.");
                }
            });
        });
    } else if (req.method === "PUT") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usamos a consulta preparada para modificar os dados recebidos do Frontend.
            modifyData.run(
                parsedBody.img_name,
                Buffer.from(parsedBody.img, 'base64'),
                parsedBody.id,
                (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Dados modificados com sucesso.");
                        res.end("Dados modificados com sucesso.");
                    }
                }
            );
        });
    }
});

const port = 3000;
server.listen(port);
console.log(`Servidor escutando no porto ${port}`);
