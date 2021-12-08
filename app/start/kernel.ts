/* eslint-disable import/first */
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
import database from '../config/database';
//
import Routes from '../routes/index.routes';
import asyncErrors from '../middlewares/async-errors.middleware';

const kernel = (app: express.Application) => {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());

  database();
  Routes.init(app);

  app.use(asyncErrors);
};

export default kernel;
