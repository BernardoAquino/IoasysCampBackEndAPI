const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://camp2020:camp2020@cluster0-seh6q.mongodb.net/camp?retryWrites=true&w=majority',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const HOST = '0.0.0.0'; //Atender fora da máquina
const PORT = 3333;

app.use(express.json());
app.use(routes);

app.listen(PORT, HOST);