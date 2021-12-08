import { Request, Response } from 'express';
import User from '../entities/user.entity';

class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    let user: User = new User();

    user = Object.assign(user, req.body);

    await user.save();

    return res.send({ message: 'I have reached user.controller.create...', data: user });
  }

  async list(req: Request, res: Response): Promise<Response> {
    return res.send('I have reached user.controller.list...');
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    return res.send('User details...');
  }

  async update(req: Request, res: Response): Promise<Response> {
    return res.status(200).send('user updated');
  }

  async patch(req: Request, res: Response): Promise<Response> {
    return res.status(200).send('user patched');
  }

  async delete(req: Request, res: Response): Promise<Response> {
    return res.status(200).send('user deleted');
  }
}

export default new UserController();
