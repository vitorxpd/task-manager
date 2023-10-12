import express from 'express';

import { router } from './routes';
import cors from './app/middlewares/cors';

const app = express();
const port = 3333;

app.use(cors);
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
