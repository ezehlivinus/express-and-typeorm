import { Request, Response, NextFunction } from 'express';

import log from '../config/logger';

export default (error: Error, req: Request, res: Response, next: NextFunction) => {
  const data = {
    success: false,
    message: `Something failed:... ${error.message}`
  };

  log.error(error);
  // Cannot set headers after they are sent to the client, when next(error) uncomment
  // next(error);
  return res.status(500).send(data);
};
