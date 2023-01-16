// this is the main server
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.json());

const db = require('./db');
const models = require('./models');


// CONTROLLERS you get to see your data for the last time before it enters the database

// app.get
app.get('/movies', (req, res) => {
  models.getAll((err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(result);
      // res.send('Hello World!');
    }
  });
});

// app.post
app.post('/movies', (req, res) => {
  models.create(req.body, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).json(result);
    }
  });
});

app.put('/movies/:id', (req, res) => {
  models.changeWatched(req.body, req.params.id, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).json(result);
    }
  });
});


// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})