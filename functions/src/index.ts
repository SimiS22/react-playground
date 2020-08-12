import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://react-playground-1dd17.web.app'],
  })
);

app.get('/', (req, res) => {
  res.send({ hallo: 'hello' });
});

app.listen(4000);

export const api = functions.https.onRequest(app);
