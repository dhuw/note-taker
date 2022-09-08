const express = require('express');
const path = require('path');
const fs = require('fs');
const { randomUUID } = require('crypto');
const { readFromFile, writeToFile } = require('./utils')

var db = require('./db/db.json');
const e = require('express');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.static('public'));

//GET route
app.get('/', (req, res) =>
    res.sendFiles(path.join(__dirname, '/public/index.html'))
);

//sends user to notes
app.get('/notes', (req, res) =>
    res.sendFiles(path.join(__dirname, '/public/notes.html'))
);

//request api to render notes
app.get('/api/notes', (req, res) =>
    res.sendFiles(path.join(__dirname, '/db/db.json'))
);

app.get('*', (req, res) =>
    res.sendFiles(path.join(__dirname, '/public/index.html'))
);

app.post('/api/notes', (req, res) =>
    console.info(`${req.method} request received`);
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            id: randomUUID(),
            tite,
            text,
        };

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.status(201).json(response);
        db.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
            if (err) {
                console.log(err);
            }else {
                console.log("File written successfully\n");
            }
        });
    }
);












