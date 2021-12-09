import {
  Column, Entity, ManyToMany, OneToMany
} from 'typeorm';
import Base from './base';
import Comment from './comment.entity';
import Post from './post.entity';

@Entity('users')
export default class User extends Base {
  @Column({
    // unique: true
  })
    email!: string;

  @Column()
    firstName!: string;

  @Column()
    lastName!: string;

  @Column()
    password!: string;

  @Column({
    type: 'simple-array',
    nullable: true
  })
    roles!: string[];

  @OneToMany(() => Post, (post) => post.user, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  })
    posts!: Post[];

  @ManyToMany(() => Comment)
    comments!: Comment[];
}
