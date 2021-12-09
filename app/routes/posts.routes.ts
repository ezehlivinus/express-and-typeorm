import express from 'express';
import PostController from '../controllers/post.controller';

class PostsRoutes {
  router: express.Router;

  basePath: string;

  constructor() {
    this.router = express.Router();
    this.basePath = '/posts';
  }

  initialise() {
    this.router.route(`${this.basePath}`)
      .get(PostController.list)
      .post(PostController.create);

    // this.router.route(`${this.basePath}/:id`)
    //   .all()
    //   .get(PostController.findOne)
    //   .put(PostController.update)
    //   .patch(PostController.patch)
    //   .delete(PostController.delete);

    return this.router;
  }
}

const postRoutes = new PostsRoutes();

export default postRoutes.initialise();
