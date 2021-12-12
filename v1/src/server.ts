import express from 'express';

import 'dotenv/config';
import { router } from './routes/api';

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server is listening on port ${process.env.NODE_PORT}`);
});
