const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');
// const cors = require('cors');

mongoose.connect('mongodb+srv://semana8:semana8@cluster0-zhujk.mongodb.net/arcnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// req.query: Acessar query params (metodo GET) para filtros
// req.params: Acessar route params (metodo POST, PUT, DELETE)  para Edição e deletar
// req.body: Acessar corpo da requisição (all methods);

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000);

