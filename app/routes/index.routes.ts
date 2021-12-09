import express from 'express';
import commentRoutes from './comment.routes';
import postsRoutes from './posts.routes';
import usersRoutes from './users.routes';

class Routes {
  public static init(app: express.Application) {
    const route = '/api/v1';

    app.use(route, usersRoutes);
    app.use(route, postsRoutes);
    app.use(route, commentRoutes);
  }
}

export default Routes;
