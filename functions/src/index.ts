// import * as functions from 'firebase-functions';
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

const movies = ['avengers', 'thor', 'iron-man'];

app.get('/movies', async (req, res) => {
  res.send({
    movies: movies.filter((m) =>
      m.toLocaleLowerCase().includes(req.query.search?.toString().toLocaleLowerCase() || '')
    ),
  });
});

app.listen(4000);

// export const api = functions.https.onRequest(app);
