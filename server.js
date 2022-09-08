const express = require('express');
const path = require('path');
const fs = require('fs');
const { randomUUID } = require('crypto');
const { readFromFile, writeToFile } = require('./utils')

var db = require('./db/db.json');

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
















