import {
  Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne
} from 'typeorm';

import Base from './base';
import Post from './post.entity';
import User from './user.entity';

@Entity('comments')
export default class Comment extends Base {
  @Column({
    type: 'text'
  })
    content!: string;

  @ManyToMany(() => User, {
    cascade: ['insert', 'update']
  })
  @JoinTable({
    name: 'user_comments',
    joinColumn: {
      name: 'commentId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'userId',
      referencedColumnName: 'id'
    }
  })
    users!: User[];

  @ManyToOne(() => Post, (post) => post.comments)

  @JoinColumn({
    name: 'post_id'
  })
    post!: Post;
}
