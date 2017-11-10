const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const express =  require('express');
const app = express();

const apiRouter = require('./router/userApi_v1');
const api = require('./router/ComicApi_v1');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/marvel', {
    useMongoClient: true
});

// settings

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/', apiRouter);
app.use('/', api);

// static
app.use(express.static(__dirname + './../public/dist'));

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./../public/dist/index.html'));
});

app.listen(3000, () => console.log('server on port 3000'));
