const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('./api/posts');
require('dotenv').config()

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = process.env.DB_HOST
console.log(db)
mongoose
  .connect(db)
  .then(() => console.log('MondoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/posts', posts);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));