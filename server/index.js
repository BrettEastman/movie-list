// this is the main server
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.json());

const db = require('./db');
const models = require('./models');


// CONTROLLERS

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
  console.log('req.body: ', req.body);
  models.create(req.body, (err, result) => {
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