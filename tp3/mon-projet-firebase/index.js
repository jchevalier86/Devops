// index.js
import express from "express";

const app = express()
const port = 3000

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signup.html'));
})

app.listen(port, () => {
console.log('Server started at http://localhost:' + port);
})

// Nouveaux imports
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Recherche du chemin absolu vers le dossier actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pour remplacer le Hellow World
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});