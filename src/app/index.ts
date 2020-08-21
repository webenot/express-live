import * as express from 'express';
import { Request, Response, Application } from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  res.end('Welcome!');
});

app.listen(port, () => {
  console.log(`Application was started on port ${port}`);
});
