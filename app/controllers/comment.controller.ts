import { Request, Response } from 'express';
import Comment from '../entities/comment.entity';
import Post from '../entities/post.entity';
import User from '../entities/user.entity';

class CommentController {
  async create(req: Request, res: Response) {
    const { postId, content } = req.body;

    const post: Post = await Post.findOne(postId);
    const user = await User.findOne(req.body.user_id);

    const comment = new Comment();

    comment.content = content;
    comment.post = post;
    comment.users = [user];

    await comment.save();

    res.status(201).send({ message: 'Comment created', data: comment });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const response = await Comment.delete(id);

    res.status(200).send({ message: 'Comment deleted', data: response });
  }

  async list(req: Request, res: Response) {
    const comments = await Comment.find();

    res.status(200).send({ message: 'Comments listed', data: comments });
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;

    const comment = await Comment.find({ relations: ['post', 'users'], where: { id } });

    res.status(200).send({
      success: true,
      message: 'Comment found',
      data: comment
    });
  }
}

export default new CommentController();
