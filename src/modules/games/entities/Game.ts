import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '../../users/entities/User';
import { Gender } from "./Gender";
import { Order } from './Order';

@Entity("games")
export class Game {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => User, (user) => user.games)
  users: User[];

  @ManyToMany(() => Gender, (gender) => gender.games)
  genders: Gender[];

  @ManyToMany(() => Order, (order) => order.games)
  orders: Order[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
