import express from 'express';
import { DBConnection } from './db/db.js';
import bodyParser from 'body-parser'; // for parsing incoming post request bodies
import libraryRouter from './routes/library.router.js'; // import the users router

DBConnection(); // connect to the database

const app = express();

app.use(bodyParser.json()); // using json data in post requests

const requestFilter = (req, res, next) => {
  console.log('Middleware STop check for all routes');
  next();
};
// app.use(requestFilter);

app.use('/', libraryRouter); // use the users router
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server Running on: http://localhost:${port}`);
});
