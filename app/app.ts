/* eslint-disable import/first */
import 'express-async-errors';
import express from 'express';
import log from './config/logger';
// All middleware
import start from './start/kernel';

function main() {
  const app: express.Application = express();
  const port: number = <number><unknown>process.env.PORT || 3000;

  start(app);

  const runningMessage = `Server listening on port ${port}`;
  app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
  });

  app.listen(port, () => {
    log.info(runningMessage);
  });
}

main();
