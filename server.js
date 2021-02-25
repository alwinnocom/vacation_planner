//jshint esversion:6

const express = require('express');
const app = express();

app.use(express.static('./dist/vacation_planner.json'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/vacation_planner.json/'}
  );
});

app.listen(process.env.PORT || 8080);
