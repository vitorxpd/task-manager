import express from 'express';

import { router } from './routes';

const app = express();
const port = 3333;

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
