import express from 'express';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.use('/static', express.static(resolve(__dirname, 'frontend', 'static')));
app.get('/*', (req, res) =>
  res.sendFile(resolve(__dirname, 'frontend', 'index.html'))
);
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
