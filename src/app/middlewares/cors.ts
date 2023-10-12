import { Request, Response, NextFunction } from 'express';

export = (request: Request, response: Response, next: NextFunction) => {
  response.setHeader('Access-Control-Allow-Origin', '*');

  next();
};
