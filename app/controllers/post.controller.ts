import { Request, Response } from 'express';
import User from '../entities/user.entity';
import Post from '../entities/post.entity';

class PostController {
  async create(req: Request, res: Response) {
    const user = await User.findOne({ id: req.body.user_id });

    const post: Post = Post.create({
      title: req.body.title,
      content: req.body.content,
      user
    });

    await post.save();

    return res.status(201).send({ message: 'Post created', data: post });
  }

  async list(req: Request, res: Response) {
    const posts = await Post.find({ relations: ['user', 'comments'] });

    return res.status(200).send({ success: true, message: 'Posts listed', data: posts });
  }
}

export default new PostController();
