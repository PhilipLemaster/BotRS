const express = require('express');
const path = require('path');

const mine = require('./public/scripts/mine');
const fish = require('./public/scripts/fish');

const app = express();
const PORT = process.env.PORT || '8080';

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Listening on http:/localhost:${PORT}`);
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/mining', function(req, res) {
    mine.main();
})

app.get('/fishing', function(req, res) {
    fish.main();
})