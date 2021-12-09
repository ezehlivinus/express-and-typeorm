import express from 'express';
import CommentController from '../controllers/comment.controller';

class CommentRoutes {
  router: express.Router;

  basePath: string;

  constructor() {
    this.router = express.Router();
    this.basePath = '/comments';
  }

  initialise() {
    this.router.route(`${this.basePath}`)
      .get(CommentController.list)
      .post(CommentController.create);

    this.router.route(`${this.basePath}/:id`)
      .all()
      .get(CommentController.findOne)
      .delete(CommentController.delete);

    return this.router;
  }
}

// const commentRoutes = ;

export default new CommentRoutes().initialise();
