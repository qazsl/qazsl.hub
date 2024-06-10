const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const express = require('express'); // Import express module

const app = express(); // Create Express app instance

const sqlite3 = require("sqlite3").verbose();


const db = new sqlite3.Database("empresa.db", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Conexão estabelecida com sucesso.");
    }
});

db.run(
    `CREATE TABLE IF NOT EXISTS Produtos(
        ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
        ProductName TEXT,
        SupplierID INTEGER,
        CategoryID INTEGER,
        Unit TEXT,
        Price FLOAT,
        ImageData BLOB
    )`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Таблица обновлена успешно.");
        }
    }
);

const search = (callback) => {
    db.all("SELECT * FROM Produtos", (err, rows) => {
        if (err) {
            console.error(err);
        } else {
            callback(rows);
        }
    });
};

const insertData = db.prepare(
    `INSERT INTO Produtos (ProductName, SupplierID, CategoryID, Unit, Price, ImageData)
    VALUES (?, ?, ?, ?, ?, ?)`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Данные вставлены успешно.");
        }
    }
);

const deleteData = db.prepare(
    `DELETE FROM Produtos WHERE ProductID == ?`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados excluídos com sucesso.");
        }
    }
);

const modifyData = db.prepare(
    `UPDATE Produtos
      SET ProductName = ?,
          SupplierID = ?,
          CategoryID = ?,
          Unit = ?,
          Price = ?
     WHERE ProductID = ?`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados modificados com sucesso.");
        }
    }
);

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    console.log(`Received request: ${req.method} ${req.url}`);

    if (req.method === "GET") {
        search((result) => {
            console.log('Sending data:', result);
            res.write(JSON.stringify(result));
            res.end();
        });
    } else if (req.method === "POST") {
        app.post('/upload', (req, res) => {
            const form = new formidable.IncomingForm();
        
            form.parse(req, async (err, fields, files) => {
                if (err) {
                    console.error('Error uploading image:', err);
                    res.status(500).json({ error: 'Error uploading image' });
                    return;
                }
        
                const { ProductName, SupplierID, CategoryID, Unit, Price } = fields;
        
                const oldPath = files.image.path;
                const newPath = './images/' + files.image.name;
        
                try {
                    fs.renameSync(oldPath, newPath);
        
                    // Save file path to database
                    insertData.run(
                        ProductName,
                        SupplierID,
                        CategoryID,
                        Unit,
                        Price,
                        newPath
                    );
        
                    console.log("Data inserted successfully.");
                    res.json({ message: 'Image uploaded successfully' });
                } catch (error) {
                    console.error('Error moving file:', error);
                    res.status(500).json({ error: 'Error moving file' });
                }
            });
        });
    } else if (req.method === "DELETE") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            deleteData.run(parsedBody.ProductID);
            console.log("Dados excluídos com sucesso.");
        });
    } else if (req.method === "PUT") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            modifyData.run(
                parsedBody.ProductName,
                parsedBody.SupplierID,
                parsedBody.CategoryID,
                parsedBody.Unit,
                parsedBody.Price,
                parsedBody.ProductID
            );
            console.log("Dados modificados сom sucesso.");
        });
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});