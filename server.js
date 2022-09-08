const express = require('express');
const path = require('path');
const fs = require('fs');
const { randomUUID } = require('crypto');
const { readFromFile, writeToFile } = require('./utils')

var db = require('./db/db.json');

const PORT = 3001;

const app = express();





