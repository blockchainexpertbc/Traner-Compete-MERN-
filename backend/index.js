const createError = require('http-errors');
const http = require('http');
const express = require('express');
const router = express.Router();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// require('dotenv').config();
// view engine setup
app.use(bodyParser.json());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


   /* bodyParser.urlencoded() is deprecated */
require('./app/routes')(app)
const server = http.createServer(app);
const db = require('./app/db/db.connect');
require('./app/service').createSocket(require('./app/socket')(server));

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



