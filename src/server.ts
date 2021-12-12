import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server is listening on port ${process.env.NODE_PORT}`);
});
