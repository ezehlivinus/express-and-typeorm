import {
  Column, Entity, JoinColumn, ManyToOne, OneToMany
} from 'typeorm';

import Base from './base';
import Comment from './comment.entity';
import User from './user.entity';

@Entity('posts')
export default class Post extends Base {
  @Column()
    title!: string;

  @Column({
    type: 'text'
  })
    content!: string;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })

  @JoinColumn({
    name: 'user_id'
  })
    user!: User;

  @OneToMany(() => Comment, (comment) => comment.post)
    comments!: Comment[];
}
