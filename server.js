//jshint esversion:6

const express = require('express');
const app = express();

app.use(express.static('./angular-build'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: '/angular-build/'}
  );
});

app.listen(process.env.PORT || 8080);
