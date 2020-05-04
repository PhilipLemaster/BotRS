const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('./config/passport');

const stand = require('./public/scripts/standards');
const mine = require('./public/scripts/mine');
const fish = require('./public/scripts/fish');

const app = express();
const PORT = process.env.PORT || '8080';
var db = require('./models');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// app.listen(PORT, () => {
//     // console.log(`Listening on http:/localhost:${PORT}`);
// })

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/mining', function(req, res) {
    mine.main();
})

app.get('/fishing', function(req, res) {
    fish.main();
})

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });