import 'dotenv/config';
import express from 'express';
import './db.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.route('/').get((req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
