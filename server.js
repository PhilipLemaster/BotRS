const express = require('express');
const path = require('path');

const mine = require('./scripts/mine');
const fish = require('./scripts/fish');

const app = express();
const PORT = process.env.PORT || '8080';

app.use(express.urlencoded({ extended: true}));

app.get("/", function(req, res) {
    res.status(200).send('BOTJS: Runescape Bot for Farming Lvls');
});

app.listen(PORT, () => {
    console.log(`Listening on http:/localhost:${PORT}`);
})

app.get('/mining', function(req, res) {
    mine.main();
})

app.get('/fishing', function(req, res) {
    fish.main();
})